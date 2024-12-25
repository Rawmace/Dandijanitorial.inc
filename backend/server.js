const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;
app.use(cors()); // Allow requests from different origins

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup email transport (Gmail as example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  },
});

// Endpoint to handle the form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Define email options
  const mailOptions = {
    from: `${name} <${email}>`, // Sender's email with name
    to: process.env.EMAIL_USER, // Send to your own email address
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error while sending email:", error);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to send email" });
    }
    console.log("Email sent: " + info.response);
    return res
      .status(200)
      .json({ status: "success", message: "Email sent successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
