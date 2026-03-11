import { LayoutDashboard, Users, Calendar, Settings } from 'lucide-react'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#1a1a1a', color: 'white', padding: '20px' }}>
        <h2 style={{ marginBottom: '40px', color: '#4CAF50' }}>SmashIT Admin</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <LayoutDashboard size={20} /> Dashboard
            </li>
            <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <Users size={20} /> Users
            </li>
            <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <Calendar size={20} /> Bookings
            </li>
            <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <Settings size={20} /> Settings
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Welcome to SmashIT Admin Panel</h1>
        <p>Manage your courts, users, and bookings from here.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
          <StatCard title="Total Users" value="1,234" color="#2196F3" />
          <StatCard title="Active Bookings" value="56" color="#4CAF50" />
          <StatCard title="Revenue (MTD)" value="$12,500" color="#FF9800" />
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, color }: { title: string, value: string, color: string }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: `4px solid ${color}` }}>
      <div style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>{title}</div>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</div>
    </div>
  )
}

export default App
