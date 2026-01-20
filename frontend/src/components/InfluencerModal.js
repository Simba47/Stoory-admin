import { useState } from "react";
import { API_URL } from "../config";

export default function InfluencerModal({ onClose }) {
  const [form, setForm] = useState({
    role: "influencer",
    name: "",
    mobile: "",
    email: "",
    insta_id: "",
    location: "",
    price: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setStatus("✅ Application submitted successfully!");
      setForm({
        role: "influencer",
        name: "",
        mobile: "",
        email: "",
        insta_id: "",
        location: "",
        price: ""
      });
    } catch (err) {
      setStatus("❌ " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>✕</button>

        <h2>Join as Influencer</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input name="email" placeholder="Email Address" onChange={handleChange} />
        <input name="insta_id" placeholder="Instagram ID" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input name="price" placeholder="Price for Promotion" onChange={handleChange} />

        <button className="primary full" onClick={submitForm} disabled={loading}>
          {loading ? "Submitting..." : "Submit Application →"}
        </button>

        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}
