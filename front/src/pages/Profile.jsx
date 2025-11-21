import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    joinDate: '2025-01-15',
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">User Profile</h1>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img className="h-32 w-32 rounded-full object-cover shadow-lg border-4 border-white" src={user.avatar} alt="User avatar" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-lg text-gray-600">{user.email}</p>
                  <span className="mt-2 inline-block bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">{user.role}</span>
                  <p className="mt-4 text-sm text-gray-500">Member since {new Date(user.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="self-start">
                   <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Settings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50/50 rounded-lg">
                    <span>Change Password</span>
                    <button className="text-indigo-600 font-medium">Change</button>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50/50 rounded-lg">
                    <span>Notification Preferences</span>
                    <button className="text-indigo-600 font-medium">Manage</button>
                  </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50/50 rounded-lg">
                    <span>Two-Factor Authentication</span>
                    <span className="text-green-600 font-medium">Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
