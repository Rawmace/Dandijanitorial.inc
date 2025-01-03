const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "https://dandijanitorial.com", // Change this if needed
  })
);

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup email transport for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail service
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app-specific password
  },
});

// Verify transport configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Error in transporter configuration:", error);
  } else {
    console.log("Email transporter is ready to send emails.");
  }
});

// Validation Middleware
function validateEmailForm(req, res, next) {
  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    console.log("Validation failed: Missing fields.");
    return res.status(400).json({
      status: "error",
      message: "All fields (name, email, message) are required.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("Validation failed: Invalid email format.");
    return res.status(400).json({
      status: "error",
      message: "Invalid email format.",
    });
  }

  console.log("Validation successful.");
  next();
}

// Endpoint to handle the form submission
app.post("/send-email", validateEmailForm, (req, res) => {
  console.log("Received request body:", req.body); // Log incoming request body

  const { name, email, message } = req.body;

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Log mailOptions for debugging
  console.log("Mail options:", mailOptions);

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error while sending email:", error);
      return res.status(500).json({
        status: "error",
        message: "Failed to send email. " + error.message,
      });
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
