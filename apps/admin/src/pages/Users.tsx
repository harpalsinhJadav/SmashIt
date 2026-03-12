import {
  Mail,
  MoreVertical,
  Phone,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import api from "../api/client";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  phoneNumber?: string;
  createdAt: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.delete(`/users/${id}`);
        setUsers(users.filter((u) => u.id !== id));
      } catch {
        alert("Failed to delete user");
      }
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page">
      <header className="page-header">
        <div className="header-left">
          <h1 className="gradient-text">User Management</h1>
          <p className="text-muted">
            Manage system users, roles and permissions.
          </p>
        </div>
      </header>

      <div className="card table-card">
        <div className="table-actions">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">
            <ShieldCheck size={18} />
            <span>Manage Roles</span>
          </button>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Contact info</th>
                <th>Role</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    Loading users...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info-cell">
                        <div className="user-avatar-sm">
                          {user.name?.charAt(0) || "U"}
                        </div>
                        <div>
                          <div className="user-name-cell">{user.name}</div>
                          <div className="user-id-cell">{user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info-cell">
                        <div className="contact-item">
                          <Mail size={12} /> {user.email}
                        </div>
                        {user.phoneNumber && (
                          <div className="contact-item">
                            <Phone size={12} /> {user.phoneNumber}
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className={`role-badge ${user.role.toLowerCase()}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn delete"
                          onClick={() => handleDelete(user.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                        <button className="action-btn">
                          <MoreVertical size={16} />
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
        .users-page {
          padding: 32px;
          animation: fadeIn 0.4s ease-out;
        }

        .table-card {
          padding: 0;
          overflow: hidden;
        }

        .table-actions {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid var(--border);
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-main);
          padding: 10px 16px;
          border-radius: 10px;
          border: 1px solid var(--border);
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 14px;
        }

        .table-container {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .admin-table th {
          padding: 16px 24px;
          background: #f8fafc;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .admin-table td {
          padding: 16px 24px;
          border-bottom: 1px solid var(--border);
          vertical-align: middle;
        }

        .user-info-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar-sm {
          width: 32px;
          height: 32px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 12px;
        }

        .user-name-cell {
          font-weight: 600;
          font-size: 14px;
        }

        .user-id-cell {
          font-size: 10px;
          color: var(--text-muted);
        }

        .contact-info-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .role-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .role-badge.admin { background: #fee2e2; color: #ef4444; }
        .role-badge.owner { background: #e0e7ff; color: #6366f1; }
        .role-badge.player { background: #f1f5f9; color: #64748b; }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          color: var(--text-muted);
        }

        .action-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .action-btn.delete:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Users;
