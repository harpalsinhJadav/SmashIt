import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import api from "../api/client";

interface Stats {
  summary: {
    users: number;
    courts: number;
    bookings: number;
    revenue: number;
  };
  chartData: Array<{ name: string; value: number }>;
  recentBookings: Array<{
    id: string;
    user: { name: string };
    court: { name: string };
    status: string;
    createdAt: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await api.get("/stats/admin");
      setStats(data);
    } catch (error) {
      console.error("Failed to fetch stats", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      label: "Total Players",
      value: stats?.summary.users || 0,
      icon: Users,
      color: "#6366f1",
      bg: "#e0e7ff",
    },
    {
      label: "Total Courts",
      value: stats?.summary.courts || 0,
      icon: MapPin,
      color: "#10b981",
      bg: "#d1fae5",
    },
    {
      label: "Total Bookings",
      value: stats?.summary.bookings || 0,
      icon: CalendarCheck,
      color: "#f59e0b",
      bg: "#fef3c7",
    },
    {
      label: "Total Revenue",
      value: stats ? `₹${stats.summary.revenue.toLocaleString()}` : "₹0",
      icon: TrendingUp,
      color: "#ef4444",
      bg: "#fee2e2",
    },
  ];

  if (loading) return <div className="loading">Loading Dashboard...</div>;

  const COLORS = [
    "#6366f1",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
  ];

  return (
    <div className="dashboard-content">
      <header className="page-header">
        <h1 className="gradient-text">Dashboard Overview</h1>
        <p className="text-muted">
          Welcome back, Admin! Here's what's happening today.
        </p>
      </header>

      <div className="stats-grid">
        {statCards.map((card, i) => (
          <div key={i} className="card stat-card">
            <div
              className="stat-icon"
              style={{ backgroundColor: card.bg, color: card.color }}
            >
              <card.icon size={24} />
            </div>
            <div className="stat-info">
              <h3>{card.value}</h3>
              <p>{card.label}</p>
            </div>
            <ArrowUpRight className="stat-arrow" size={16} />
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card chart-container">
          <div className="card-header">
            <h2>Bookings by Court Type</h2>
          </div>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={stats?.chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b" }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {stats?.chartData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card recent-bookings">
          <div className="card-header">
            <h2>Recent Bookings</h2>
          </div>
          <div className="booking-list">
            {stats?.recentBookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <div className="booking-user-icon">
                  {booking.user.name.charAt(0)}
                </div>
                <div className="booking-details">
                  <h4>{booking.user.name}</h4>
                  <p>{booking.court.name}</p>
                </div>
                <div className="booking-meta">
                  <span
                    className={`status-badge ${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>
                  <div className="booking-time">
                    <Clock size={12} />
                    <span>
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-content {
          padding: 32px;
          animation: fadeIn 0.5s ease-out;
        }

        .page-header {
          margin-bottom: 32px;
        }

        .page-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stat-info p {
          color: var(--text-muted);
          font-size: 14px;
          font-weight: 500;
        }

        .stat-arrow {
          position: absolute;
          top: 16px;
          right: 16px;
          color: var(--text-muted);
          opacity: 0.3;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .card-header {
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-header h2 {
          font-size: 18px;
          font-weight: 600;
        }

        .booking-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .booking-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }

        .booking-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .booking-user-icon {
          width: 40px;
          height: 40px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
        }

        .booking-details {
          flex: 1;
        }

        .booking-details h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .booking-details p {
          font-size: 12px;
          color: var(--text-muted);
        }

        .booking-meta {
          text-align: right;
        }

        .status-badge {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 4px;
        }

        .status-badge.confirmed { background: #d1fae5; color: #059669; }
        .status-badge.pending { background: #fef3c7; color: #d97706; }
        .status-badge.cancelled { background: #fee2e2; color: #dc2626; }

        .booking-time {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: var(--text-muted);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .loading {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--primary);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
