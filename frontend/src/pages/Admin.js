import { useEffect, useState } from "react";

const API = "https://stoory-backend-e41q.onrender.com";
// local: http://localhost:5000

export default function Admin() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch applications
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API}/api/applications`);
      const data = await res.json();
      setApps(data);
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // 🔹 Update application (contacted / notes)
  const updateApplication = async (id, payload) => {
    try {
      await fetch(`${API}/api/applications/${id}/contacted`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Update failed", err);
      alert("Server error while updating");
    }
  };

  if (loading) {
    return <p style={{ padding: 20 }}>Loading applications...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel – Applications</h2>

      <div style={{ overflowX: "auto", marginTop: 20 }}>
        <table
          border="1"
          cellPadding="8"
          cellSpacing="0"
          width="100%"
          style={{ borderCollapse: "collapse" }}
        >
          <thead style={{ background: "#f2f2f2" }}>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Instagram</th>
              <th>Company</th>
              <th>Location</th>
              <th>Price</th>
              <th>Contacted</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {apps.map((app) => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.mobile}</td>
                <td>{app.email}</td>
                <td>{app.insta_id || "-"}</td>
                <td>{app.company_name || "-"}</td>
                <td>{app.location || "-"}</td>
                <td>{app.price || "-"}</td>

                {/* ✅ FIXED Contacted checkbox */}
                <input
  type="checkbox"
  checked={app.contacted}
  onChange={() => {
    const updatedApps = apps.map(a =>
      a.id === app.id
        ? { ...a, contacted: !a.contacted }
        : a
    );

    setApps(updatedApps);

    // 🔁 sync backend (fire & forget)
    fetch(`${API}/api/applications/${app.id}/contacted`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contacted: !app.contacted,
      }),
    });
  }}
/>

                {/* 📝 FIXED Notes input */}
                <td>
                 <input
  style={{ width: "200px" }}
  value={app.notes}
  placeholder="Add note..."
  onChange={(e) => {
    const value = e.target.value;

    setApps(prev =>
      prev.map(a =>
        a.id === app.id ? { ...a, notes: value } : a
      )
    );
  }}
  onBlur={() => {
    fetch(`${API}/api/applications/${app.id}/notes`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        notes: app.notes,
      }),
    });
  }}
/>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
