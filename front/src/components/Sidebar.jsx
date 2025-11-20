import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white p-4">
      <nav>
        <ul>
          <li className="mb-2"><Link to="/dashboard" className="block p-2 rounded hover:bg-gray-600">Dashboard</Link></li>
          <li className="mb-2"><Link to="/manage-students" className="block p-2 rounded hover:bg-gray-600">Manage Students</Link></li>
          <li className="mb-2"><Link to="/register-student" className="block p-2 rounded hover:bg-gray-600">Register Student</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
