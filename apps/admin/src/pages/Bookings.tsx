import React, { useEffect, useState } from "react";
import {
  Calendar,
  Search,
  User,
  MapPin,
  CreditCard,
  Clock,
  Filter,
} from "lucide-react";
import api from "../api/client";

interface Booking {
  id: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  totalAmount: number;
  status: string;
  user: { name: string; email: string };
  court: { name: string; location: string };
  createdAt: string;
}

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data } = await api.get("/bookings/admin/all");
      setBookings(data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.court.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookings-page">
      <header className="page-header">
        <div className="header-left">
          <h1 className="gradient-text">Booking Management</h1>
          <p className="text-muted">
            Monitor and track all court reservations across the platform.
          </p>
        </div>
      </header>

      <div className="card table-card">
        <div className="table-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by player name or court..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-outline">
            <Filter size={18} />
            <span>Filter by Status</span>
          </button>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Booking Details</th>
                <th>Player</th>
                <th>Venue</th>
                <th>Status & Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    Loading bookings...
                  </td>
                </tr>
              ) : filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className="booking-time-cell">
                        <div className="booking-date">
                          <Calendar size={14} />
                          {new Date(booking.bookingDate).toLocaleDateString()}
                        </div>
                        <div className="booking-time-range">
                          <Clock size={12} />
                          {booking.startTime} - {booking.endTime}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="player-info">
                        <div className="player-name">
                          <User size={14} /> {booking.user.name}
                        </div>
                        <div className="player-email">{booking.user.email}</div>
                      </div>
                    </td>
                    <td>
                      <div className="venue-info-small">
                        <div className="venue-name">{booking.court.name}</div>
                        <div className="venue-loc">
                          <MapPin size={12} />{" "}
                          {booking.court.location.split(",")[0]}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="status-payment">
                        <span
                          className={`booking-status-tag ${booking.status.toLowerCase()}`}
                        >
                          {booking.status}
                        </span>
                        <div className="payment-amount">
                          <CreditCard size={12} /> ₹{booking.totalAmount}
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="action-btn">
                        <Search size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .bookings-page {
          padding: 32px;
          animation: fadeIn 0.4s ease-out;
        }

        .booking-time-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .booking-date {
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .booking-time-range {
          font-size: 12px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .player-name {
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
        }

        .player-email {
          font-size: 12px;
          color: var(--text-muted);
        }

        .venue-name {
          font-weight: 600;
          font-size: 14px;
        }

        .booking-status-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 4px;
        }

        .booking-status-tag.confirmed { background: #d1fae5; color: #059669; }
        .booking-status-tag.pending { background: #fef3c7; color: #d97706; }
        .booking-status-tag.cancelled { background: #fee2e2; color: #dc2626; }
        .booking-status-tag.completed { background: #e0e7ff; color: #6366f1; }

        .payment-amount {
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .btn-outline {
          border: 1px solid var(--border);
          background: white;
          color: var(--text-main);
        }

        .btn-outline:hover {
          background: var(--bg-main);
        }
      `}</style>
    </div>
  );
};

export default Bookings;
