import { Loader2, Lock, LogIn, Mail, Trophy } from "lucide-react";
import React, { useState } from "react";

import api from "../api/client";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await api.post("/auth/login", { email, password });

      // Check if user is Admin
      if (data.user.role !== "ADMIN") {
        throw new Error("Access denied. Admin only.");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.reload();
    } catch (err: unknown) {
      const error = err as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      setError(
        error.response?.data?.message || error.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass">
        <div className="login-header">
          <div className="logo-circle">
            <Trophy size={32} />
          </div>
          <h1>SmashIT Admin</h1>
          <p>Login to manage your platform</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            className="btn btn-primary login-btn"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <LogIn size={20} />
            )}
            <span>{loading ? "Authenticating..." : "Sign In"}</span>
          </button>
        </form>

        <div className="login-footer">
          <p>© 2024 SmashIT Sports Platform</p>
        </div>
      </div>

      <style>{`
        .login-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          top: -200px;
          right: -200px;
          opacity: 0.1;
        }

        .login-container::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
          bottom: -200px;
          left: -200px;
          opacity: 0.1;
        }

        .login-card {
          width: 400px;
          padding: 48px;
          border-radius: 24px;
          text-align: center;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 10;
        }

        .logo-circle {
          width: 64px;
          height: 64px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          box-shadow: 0 0 20px var(--primary);
        }

        .login-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .login-header p {
          color: #94a3b8;
          margin-bottom: 32px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .input-group input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          outline: none;
          transition: all 0.2s;
        }

        .input-group input:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.1);
        }

        .login-btn {
          width: 100%;
          justify-content: center;
          padding: 14px;
          font-size: 16px;
          margin-top: 8px;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
        }

        .login-footer {
          margin-top: 32px;
          font-size: 12px;
          color: #64748b;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;
