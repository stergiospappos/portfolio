import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./ContactForm.css";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    services: [],
    gdprConsent: false,
  });
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (formData.services.length === 0)
      newErrors.services = "At least one service must be selected.";
    if (!formData.gdprConsent)
      newErrors.gdprConsent = "You must accept GDPR consent.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setToastMessage("Form Submitted Successfully!");
    setTimeout(() => setToastMessage(""), 3000);
    onClose(); // Close modal
  };

  return (
    <>
      {toastMessage && <div className="toast-message">{toastMessage}</div>}

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="contact-form">
          <p className="contact-form-text">
            I would love to hear from you, here&apos;s an easy way to reach to
            me.
          </p>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            {/* Services */}
            <div className="form-group">
              <label>Requested Services</label>
              {[
                "UI/UX Design",
                "Website Design & Dev",
                "eCommerce Development",
                "Custom Solution & Integration",
                "Digital Consulting",
                "Digital Strategy",
              ].map((service) => (
                <label key={service} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={service}
                    onChange={handleCheckboxChange}
                  />
                  {service}
                </label>
              ))}
              {errors.services && (
                <span className="error">{errors.services}</span>
              )}
            </div>

            {/* GDPR Consent */}
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleInputChange}
                />
                I agree to the GDPR terms and conditions
              </label>
              {errors.gdprConsent && (
                <span className="error">{errors.gdprConsent}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
