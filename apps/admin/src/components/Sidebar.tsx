import {
  CalendarCheck,
  LayoutDashboard,
  LogOut,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "courts", label: "Courts", icon: MapPin },
    { id: "bookings", label: "Bookings", icon: CalendarCheck },
  ];

  return (
    <aside className="admin-sidebar shadow">
      <div className="sidebar-brand">
        <Trophy className="brand-icon" />
        <span className="brand-text gradient-text">SmashIT Admin</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          className="nav-item logout"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      <style>{`
        .admin-sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-sidebar);
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
        }

        .sidebar-brand {
          height: var(--header-height);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .brand-icon {
          color: var(--primary);
        }

        .brand-text {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .sidebar-nav {
          flex: 1;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          color: #94a3b8;
          background: transparent;
          width: 100%;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
        }

        .nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-item.active {
          color: white;
          background: var(--primary);
          box-shadow: var(--shadow);
        }

        .sidebar-footer {
          padding: 24px 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-item.logout:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
