# SmashIT Monorepo 🎾

Welcome to the **SmashIT** monorepo. This project is a full-stack ecosystem for managing sports court bookings, featuring a mobile app, an admin dashboard, and a robust backend.

## 📁 Project Structure

This monorepo uses **Turborepo** for orchestration:

- **`apps/mobile`**: React Native application for Players and Owners.
- **`apps/admin`**: React + Vite admin dashboard for system administration.
- **`apps/api`**: NestJS backend REST API.
- **`packages/database`**: Prisma schema and client for PostgreSQL.
- **`packages/config`**: Shared configurations (ESLint, TSConfig).

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: >= 22.11.0
- **Docker**: For running the local database.
- **CocoaPods**: For iOS mobile development.

### Initial Setup
1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Database**:
   ```bash
   docker-compose up -d
   ```

3. **Prepare the Database**:
   ```bash
   cd packages/database
   # Create a .env file and set DATABASE_URL
   npx prisma generate
   npx prisma db push
   ```

---

## 🛠 Development

### Running the Applications

| Feature | Command |
| :--- | :--- |
| **Run All (Dev)** | `npm run dev` |
| **Start Mobile (Metro)** | `npm run mobile:start` |
| **Run Android** | `npm run mobile:android` |
| **Run iOS** | `npm run mobile:ios` |
| **Run API Only** | `npm run dev --filter=api` |
| **Run Admin Only** | `npm run dev --filter=admin` |

### Scripts Overview (Root)
- `npm run build`: Build all applications.
- `npm run lint`: Lint all packages.
- `npm run format`: Format all code using Prettier.
- `npm run test`: Run all test suites.

---

## 🏗 Tech Stack

- **Orchestration**: [Turborepo](https://turbo.build/)
- **Mobile**: [React Native](https://reactnative.dev/)
- **Admin Dashboard**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Backend API**: [NestJS](https://nestjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: Vanilla CSS / Tailwind (Admin)

---

## ⚖️ License
UNLICENSED
