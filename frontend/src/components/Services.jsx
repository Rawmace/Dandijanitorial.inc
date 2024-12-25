import React from "react";
import {
  FaBroom,
  FaWater,
  FaCouch,
  FaDoorOpen,
  FaPhoneAlt,
  FaShower,
} from "react-icons/fa"; // Import some example icons
import "./Services.css"; // Ensure you link the upgraded CSS file

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-heading">Our Premium Services</h2>

        <div className="services-list">
          <div className="service-item">
            <div className="service-icon">
              <FaBroom />
            </div>
            <h3>Janitorial Services & Housekeeping</h3>
            <p>
              Complete janitorial and housekeeping services for a spotless
              space.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaShower />
            </div>
            <h3>Carpet Cleaning</h3>
            <p>
              Deep extraction, bonnet cleaning, pile lifting, and rotary
              pre-conditioning to rejuvenate your carpets.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaDoorOpen />
            </div>
            <h3>Strip, Seal & Wax</h3>
            <p>
              Maintain vinyl composite tile (VCT), hardwood, and stone floors to
              perfection.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaCouch />
            </div>
            <h3>Upholstery Cleaning</h3>
            <p>
              Deep cleaning for fabric furniture, office panels, and cubicle
              dividers.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaWater />
            </div>
            <h3>Flood & Water Damage Emergencies</h3>
            <p>
              Quick and effective response for flood and water damage to prevent
              further harm.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
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
