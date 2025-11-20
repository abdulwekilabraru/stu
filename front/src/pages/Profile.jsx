import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
