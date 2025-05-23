import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
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

    // Send email using Email.js
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Email.js service ID
        "YOUR_TEMPLATE_ID", // Replace with your Email.js template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your Email.js public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setIsSuccess(true);
          setIsError(false);
          setFormData({ name: "", email: "", message: "" }); // Clear form
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
      className="contact-page"
      id="contact"
    >
      {/* Background Animation */}
      <div className="contact-background"></div>

      {/* Header and Introductory Paragraph */}
      <div className="contact-header-section">
        <div className="contact-header">
          <h2>
            Get in <span className="accent">Touch</span>
          </h2>
          <div className="accent-bar"></div>
        </div>

        {/* Introductory Paragraph */}
        <div className="contact-intro">
          <p>
            I'm always open to exciting opportunities and collaborations.
            Whether you have a question, want to discuss a project, or just say
            hello, feel free to reach out. I'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Main Content (Form + Contact Info) */}
      <div className="contact-content">
        {/* Left Section - Contact Form */}
        <div className="contact-left">
          <motion.div
            className="contact-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-form-header">
              <h3>Leave a Message</h3>
            </div>
            {/* Success/Error Messages */}
            {isSuccess && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {isError && (
              <motion.p
                className="error-message"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Oops! Something went wrong. Please try again later.
              </motion.p>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <motion.div
                className="form-group"
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
                />
              </motion.div>
              <motion.div
                className="form-group"
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
                />
              </motion.div>
              <motion.div
                className="form-group"
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
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="contact-right">
          <div className="contact-info">
            <h3>Other Ways to Reach Me</h3>
            <ul>
              <li>
                <a
                  href="https://wa.me/94760870731"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp - 076 - 0870731
                </a>
              </li>
              <li>
                <a
                  href="mailto:ukavishan1234@gmail.com"
                >
                  <FaEnvelope /> Email - ukavishan1234@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kavishan-hettiarachchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn - Kavishan Hettiarachchi
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MrKavishan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub - MrKavishan
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