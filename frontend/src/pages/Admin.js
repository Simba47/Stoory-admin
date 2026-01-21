import { useEffect, useState } from "react";

const API = "https://stoory-backend-e41q.onrender.com";
// If local: http://localhost:5000

export default function Admin() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all applications
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API}/api/applications`);
      const data = await res.json();
      setApps(data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch failed", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // 🔹 Update contacted + notes
  const updateApplication = async (id, contacted, notes) => {
    try {
      await fetch(`${API}/api/applications/${id}/contacted`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contacted, notes }),
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
              <tr key={app._id}>
                <td>{app.name}</td>
                <td>{app.mobile}</td>
                <td>{app.email}</td>
                <td>{app.insta_id || "-"}</td>
                <td>{app.company_name || "-"}</td>
                <td>{app.location || "-"}</td>
                <td>{app.price || "-"}</td>

                {/* ✅ Contacted */}
                <td style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={app.contacted || false}
                    onChange={(e) => {
                      const updated = e.target.checked;

                      setApps((prev) =>
                        prev.map((a) =>
                          a._id === app._id
                            ? { ...a, contacted: updated }
                            : a
                        )
                      );

                      updateApplication(app._id, updated, app.notes || "");
                    }}
                  />
                </td>

                {/* 📝 Notes */}
                <td>
                  <input
                    style={{ width: "200px" }}
                    value={app.notes || ""}
                    placeholder="Add note..."
                    onChange={(e) => {
                      const value = e.target.value;
                      setApps((prev) =>
                        prev.map((a) =>
                          a._id === app._id
                            ? { ...a, notes: value }
                            : a
                        )
                      );
                    }}
                    onBlur={() =>
                      updateApplication(
                        app._id,
                        app.contacted || false,
                        app.notes || ""
                      )
                    }
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
