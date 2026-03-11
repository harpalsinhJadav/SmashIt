import React, { useEffect, useState } from "react";
import {
  MapPin,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Tag,
} from "lucide-react";
import api from "../api/client";

interface Court {
  id: string;
  name: string;
  location: string;
  type: string;
  status: string;
  pricePerHour: number;
  owner: { user: { name: string } };
  createdAt: string;
}

const Courts: React.FC = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCourts();
  }, []);

  const fetchCourts = async () => {
    try {
      const { data } = await api.get("/courts/admin/all");
      setCourts(data);
    } catch (error) {
      console.error("Failed to fetch courts", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await api.patch(`/courts/${id}`, { status });
      setCourts(courts.map((c) => (c.id === id ? { ...c, status } : c)));
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const filteredCourts = courts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courts-page">
      <header className="page-header">
        <div className="header-left">
          <h1 className="gradient-text">Court Management</h1>
          <p className="text-muted">
            Review and approve sports venues across the platform.
          </p>
        </div>
      </header>

      <div className="card table-card">
        <div className="table-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by court name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Court Venue</th>
                <th>Owner</th>
                <th>Type & Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    Loading venues...
                  </td>
                </tr>
              ) : filteredCourts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No venues found.
                  </td>
                </tr>
              ) : (
                filteredCourts.map((court) => (
                  <tr key={court.id}>
                    <td>
                      <div className="venue-info">
                        <div className="venue-name">{court.name}</div>
                        <div className="venue-loc">
                          <MapPin size={12} /> {court.location}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="owner-info">
                        <strong>{court.owner.user.name}</strong>
                      </div>
                    </td>
                    <td>
                      <div className="type-price">
                        <span className="court-type-tag">
                          <Tag size={12} /> {court.type}
                        </span>
                        <div className="price-label">
                          ₹{court.pricePerHour}/hr
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`status-pill ${court.status.toLowerCase()}`}
                      >
                        {court.status === "ACTIVE" && <CheckCircle size={12} />}
                        {court.status === "UNDER_REVIEW" && <Clock size={12} />}
                        {court.status === "INACTIVE" && <XCircle size={12} />}
                        {court.status.replace("_", " ")}
                      </span>
                    </td>
                    <td>
                      <div className="court-actions">
                        {court.status === "UNDER_REVIEW" && (
                          <button
                            className="approve-btn"
                            onClick={() => updateStatus(court.id, "ACTIVE")}
                            title="Approve"
                          >
                            <CheckCircle size={18} />
                          </button>
                        )}
                        <button className="view-btn" title="View Details">
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .courts-page {
          padding: 32px;
          animation: fadeIn 0.4s ease-out;
        }

        .venue-name {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 4px;
        }

        .venue-loc {
          font-size: 12px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .court-type-tag {
          font-size: 10px;
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 4px;
        }

        .price-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--secondary);
        }

        .status-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .status-pill.active { background: #d1fae5; color: #059669; }
        .status-pill.under_review { background: #fef3c7; color: #d97706; }
        .status-pill.inactive { background: #f1f5f9; color: #64748b; }

        .court-actions {
          display: flex;
          gap: 12px;
        }

        .approve-btn {
          color: var(--secondary);
          background: transparent;
        }

        .view-btn {
          color: var(--primary);
          background: transparent;
        }

        button:hover { transform: scale(1.1); }
      `}</style>
    </div>
  );
};

export default Courts;
