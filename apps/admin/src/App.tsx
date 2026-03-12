import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Courts from "./pages/Courts";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";

const App: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const handleStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!token) {
    return <Login />;
  }

  return (
    <div className="admin-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="admin-main">
        <header className="admin-header glass">
          <div className="header-search">{/* Search placeholder */}</div>
          <div className="user-profile">
            <span className="user-name">Admin User</span>
            <div className="user-avatar">A</div>
          </div>
        </header>

        <section className="admin-content">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "users" && <Users />}
          {activeTab === "courts" && <Courts />}
          {activeTab === "bookings" && <Bookings />}
        </section>
      </main>

      <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
        }

        .admin-main {
          flex: 1;
          margin-left: var(--sidebar-width);
          transition: all 0.3s;
        }

        .admin-header {
          height: var(--header-height);
          position: sticky;
          top: 0;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          border-bottom: 1px solid var(--border);
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-name {
          font-weight: 600;
          font-size: 14px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .p-32 {
          padding: 32px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
};

export default App;
