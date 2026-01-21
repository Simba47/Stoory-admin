import { useEffect, useState } from "react";

const API = "https://stoory-backend-e41q.onrender.com"; 
// 🔴 change if backend URL is different

export default function Admin() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all applications
  useEffect(() => {
    fetch(`${API}/api/admin/applications`)
      .then(res => res.json())
      .then(data => {
        setApps(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Update contacted / notes
  const updateApp = async (id, updates) => {
    try {
      await fetch(`${API}/api/admin/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates)
      });
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel – Applications</h2>

      <div style={{ overflowX: "auto", marginTop: 20 }}>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Instagram</th>
              <th>Company</th>
              <th>Contacted</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {apps.map(app => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.mobile}</td>
                <td>{app.email}</td>
                <td>{app.insta_id || "-"}</td>
                <td>{app.company_name || "-"}</td>

                {/* Contacted checkbox */}
                <td style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={app.contacted}
                    onChange={e => {
                      const updated = e.target.checked;
                      setApps(prev =>
                        prev.map(a =>
                          a.id === app.id ? { ...a, contacted: updated } : a
                        )
                      );
                      updateApp(app.id, {
                        contacted: updated,
                        notes: app.notes
                      });
                    }}
                  />
                </td>

                {/* Notes */}
                <td>
                  <input
                    style={{ width: "200px" }}
                    value={app.notes || ""}
                    placeholder="Add note..."
                    onChange={e => {
                      const value = e.target.value;
                      setApps(prev =>
                        prev.map(a =>
                          a.id === app.id ? { ...a, notes: value } : a
                        )
                      );
                    }}
                    onBlur={() =>
                      updateApp(app.id, {
                        contacted: app.contacted,
                        notes: app.notes
                      })
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
