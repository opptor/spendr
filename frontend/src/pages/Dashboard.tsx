import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/settings">Go to Settings</Link>

    </div>
  );
};

export default Dashboard;
