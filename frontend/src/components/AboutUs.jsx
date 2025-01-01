import React from "react";
import { FaLeaf, FaCertificate, FaHandshake } from "react-icons/fa"; // Add icons
import "./AboutUs.css"; // Import the CSS file for styling
import aboutImage from "../assets/about.jpg"; // Import the image
import about from "../assets/background1.jpg"; // Import the image

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        <div className="about-content">
          <div className="about-text">
            <h3 className="company-name">Our Story</h3>
            <p>
              D and I Janitorial & Carpet Cleaning is a family-owned business
              with over 20 years of experience in the carpet, upholstery, and
              janitorial cleaning industry. We focus on consistent and thorough
              cleaning practices, ensuring that your space remains pristine with
              strong on-site supervision. We believe in clear, open
              communication with our clients and aim to exceed expectations with
              every service.
            </p>

            <h3 className="mission-title">Our Mission</h3>
            <p>
              Our mission is simple – to provide top-notch cleaning services
              with honesty, integrity, and professionalism. We take great pride
              in the quality of work we deliver and strive for 100% client
              satisfaction. All of our technicians are highly trained and
              certified by the IICRC, the largest and most respected cleaning
              certification organization in the world.
            </p>

            <p>
              We also emphasize eco-friendly cleaning practices, ensuring that
              our methods and products are safe for both your workplace and the
              environment. Our goal is not only to meet but to exceed your
              expectations.
            </p>
          </div>
          <div className="about-image">
            <img src={about} alt="Our team working" />
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Our team working" />
          </div>
        </div>

        <div className="eco-friendly">
          <h3>Eco-Friendly Cleaning</h3>
          <p>
            As a certified green cleaning service provider, we care about the
            environment as much as we care about cleanliness. Our eco-friendly
            cleaning includes:
          </p>
          <div className="eco-list">
            <div className="eco-item">
              <FaLeaf className="eco-icon" />
              <p>Hospital-grade, eco-friendly chemicals</p>
            </div>
            <div className="eco-item">
              <FaCertificate className="eco-icon" />
              <p>Color-coded microfiber cloths</p>
            </div>
            <div className="eco-item">
              <FaHandshake className="eco-icon" />
              <p>HEPA filter-equipped vacuums</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
