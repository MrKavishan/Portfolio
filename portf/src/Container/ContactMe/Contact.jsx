import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setIsSuccess(true);
          setIsError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setIsError(true);
          setIsSuccess(false);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="contact-container"
      id="contact"
    >
      <div className="contact-bg-animation"></div>

      <div className="contact-header-wrapper">
        <div className="contact-title">
          <h2>
            Get in <span className="contact-accent">Touch</span>
          </h2>
          <div className="contact-title-underline"></div>
        </div>

        <div className="contact-intro-text">
          <p>
            I'm always open to exciting opportunities and collaborations.
            Whether you have a question, want to discuss a project, or just say
            hello, feel free to reach out. I'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="contact-main-content">
        <div className="contact-form-section">
          <motion.div
            className="contact-form-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-form-title">
              <h3>Leave a Message</h3>
            </div>
            
            {isSuccess && (
              <motion.p
                className="contact-success-msg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            
            {isError && (
              <motion.p
                className="contact-error-msg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Oops! Something went wrong. Please try again later.
              </motion.p>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div
                className="contact-input-group"
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </motion.div>
              
              <motion.div
                className="contact-input-group"
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </motion.div>
              
              <motion.div
                className="contact-input-group"
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-form-textarea"
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="contact-submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="contact-info-section">
          <div className="contact-info-card">
            <h3 className="contact-info-title">Other Ways to Reach Me</h3>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <a
                  href="https://wa.me/94760870731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  <FaWhatsapp className="contact-info-icon" /> 
                  WhatsApp - 076 - 0870731
                </a>
              </li>
              <li className="contact-info-item">
                <a
                  href="mailto:ukavishan1234@gmail.com"
                  className="contact-info-link"
                >
                  <FaEnvelope className="contact-info-icon" /> 
                  Email - ukavishan1234@gmail.com
                </a>
              </li>
              <li className="contact-info-item">
                <a
                  href="https://www.linkedin.com/in/kavishan-hettiarachchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  <FaLinkedin className="contact-info-icon" /> 
                  LinkedIn - Kavishan Hettiarachchi
                </a>
              </li>
              <li className="contact-info-item">
                <a
                  href="https://github.com/MrKavishan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  <FaGithub className="contact-info-icon" /> 
                  GitHub - MrKavishan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;