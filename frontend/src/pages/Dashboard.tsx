// src/components/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-blue-600 hover:underline">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="text-blue-600 hover:underline">
              Settings
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">New Signups</h3>
            <p className="text-2xl font-bold">123</p>
          </div>
          {/* Add more metrics as needed */}
        </div>

        {/* Additional Content */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <p>No recent activity to display.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
