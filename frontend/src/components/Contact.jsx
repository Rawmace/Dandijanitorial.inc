import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null); // Reset feedback state

    try {
      const response = await fetch(
        "https://dandijanitorial-inc.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setFeedback({
          type: "success",
          message: "Your message was sent successfully!",
        });
      } else {
        setFeedback({
          type: "error",
          message: "There was an error sending your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-content">
          {/* Contact Details Card */}
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📞</span>
              <p>
                Phone: <a href="tel:+16477848830">+1 647 784 8830</a> || Office:{" "}
                <a href="tel:+14167991019">+1 416 799 1019</a>
              </p>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <p>
                Email:{" "}
                <a href="mailto:dandicarpetcleaning@yahoo.com">
                  dandicarpetcleaning@yahoo.com
                </a>
              </p>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>
                Services are available at Mississauga, Toronto, Markham,
                Scarborough, Pickering
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                  aria-required="true"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {feedback && (
                <div
                  className={`form-feedback ${feedback.type}`}
                  role="alert"
                  aria-live="polite"
                >
                  {feedback.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
