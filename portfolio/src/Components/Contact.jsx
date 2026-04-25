import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const [status, setStatus] = useState("");

  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await axios.post(`${API}/api/contact`, formData);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-black py-5 d-flex flex-column align-items-center" id="contact">
      <h1 className="contact-heading m-0">CONTACT</h1>
      <p className="text-secondary fw-semibold small text-uppercase mt-2 mb-5">
        Let's work together
      </p>

      <div className="contact-card p-4 p-md-5 w-100" style={{ maxWidth: "700px" }}>
        <form onSubmit={handleSubmit} className="row g-3">

          <div className="col-md-6">
            <input name="name" value={formData.name} onChange={handleChange}
              type="text" className="form-control form-control-dark py-3" placeholder="Your Name" />
          </div>

          <div className="col-md-6">
            <input name="email" value={formData.email} onChange={handleChange}
              type="email" className="form-control form-control-dark py-3" placeholder="your@email.com" />
          </div>

          <div className="col-12">
            <input name="subject" value={formData.subject} onChange={handleChange}
              type="text" className="form-control form-control-dark py-3" placeholder="Project Subject" />
          </div>

          <div className="col-12">
            <textarea name="message" value={formData.message} onChange={handleChange}
              className="form-control form-control-dark py-3" rows={5} placeholder="Tell me about your project..." />
          </div>

          <div className="col-12">
            <button type="submit" className="submit-btn w-100 py-3 fs-6"
              disabled={status === "sending"}>
              {status === "sending" ? "SENDING..." : "SEND MESSAGE ↗"}
            </button>

            {status === "success" && (
              <p className="text-success mt-2">Message sent successfully! ✅</p>
            )}

            {status === "error" && (
              <p className="text-danger mt-2">Something went wrong or fields missing ❌</p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
};