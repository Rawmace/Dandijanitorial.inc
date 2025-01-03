import React from "react";
import {
  FaBroom,
  FaWater,
  FaCouch,
  FaDoorOpen,
  FaPhoneAlt,
  FaShower,
  FaBuilding,
  FaSprayCan,
} from "react-icons/fa";
import { GiWindow } from "react-icons/gi";

import "./Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-heading">Our Premium Services</h2>

        <div className="services-list">
          <div className="service-item">
            <div className="service-icon" aria-label="Janitorial Services Icon">
              <FaBroom />
            </div>
            <h3>Complete Janitorial Services</h3>
            <p>
              Our janitorial services cover all aspects of cleaning and
              maintenance for your workspace, facility, or home, including
              routine cleaning, window washing, trash removal, and disinfecting
              high-touch surfaces.
            </p>
          </div>

          <div className="service-item">
            <div
              className="service-icon"
              aria-label="Shower/Carpet Cleaning Icon"
            >
              <FaShower />
            </div>
            <h3>Carpet Cleaning</h3>
            <p>
              Deep extraction, bonnet cleaning, pile lifting, and rotary
              pre-conditioning to rejuvenate your carpets.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon" aria-label="Floor Maintenance Icon">
              <FaDoorOpen />
            </div>
            <h3>Strip, Seal & Wax</h3>
            <p>
              Maintain vinyl composite tile (VCT), hardwood, and stone floors to
              perfection.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon" aria-label="Upholstery Cleaning Icon">
              <FaCouch />
            </div>
            <h3>Upholstery Cleaning</h3>
            <p>
              Deep cleaning for fabric furniture, office panels, and cubicle
              dividers.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon" aria-label="Water Damage Icon">
              <FaWater />
            </div>
            <h3>Flood & Water Damage Emergencies</h3>
            <p>
              Quick and effective response for flood and water damage to prevent
              further harm.
            </p>
          </div>

          <div className="service-item">
            <div
              className="service-icon"
              aria-label="Construction Clean-up Icon"
            >
              <FaBuilding />
            </div>
            <h3>General/Post Construction Clean-up</h3>
            <p>
              Comprehensive clean-up services for construction sites, removing
              debris and ensuring a spotless environment.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon" aria-label="Glass Cleaning Icon">
              <GiWindow />
            </div>
            <h3>Interior Glass Cleaning</h3>
            <p>
              Crystal-clear interior glass cleaning, ensuring streak-free and
              spotless results for windows and glass surfaces.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon" aria-label="Disinfecting Icon">
              <FaSprayCan />
            </div>
            <h3>Sanitization and Disinfecting</h3>
            <p>
              Professional sanitization and disinfecting services with the use
              of an electrostatic sprayer for thorough coverage and safety.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon" aria-label="Emergency Response Icon">
              <FaPhoneAlt />
            </div>
            <h3>24/7 Emergency Response</h3>
            <p>
              Round-the-clock support for emergency cleaning needs with same-day
              service.
            </p>
          </div>
        </div>

        <div className="startup-process">
          <h3>A Smooth and Organized Startup</h3>
          <p>
            Prior to your first service, our manager will meet with you to
            discuss your requirements. After the first service, we ensure you’re
            satisfied with a follow-up call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
