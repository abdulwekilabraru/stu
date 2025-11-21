import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  // Mock data for dashboard widgets
  const stats = [
    { name: 'Total Students', value: '1,250', change: '+5.4%', changeType: 'positive' },
    { name: 'New Registrations', value: '82', change: '+12.1%', changeType: 'positive' },
    { name: 'Courses Offered', value: '48', change: 'N/A', changeType: 'neutral' },
    { name: 'Pending Approvals', value: '5', change: '-2', changeType: 'negative' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">Dashboard</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.name} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
                  <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  {stat.change !== 'N/A' && (
                    <p className={`mt-2 text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} vs last month
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
                <ul className="divide-y divide-gray-200">
                  <li className="py-3">Registered new student: Alex Johnson (#1251)</li>
                  <li className="py-3">Updated course details for "Intro to AI"</li>
                  <li className="py-3">Approved registration for Maria Garcia (#1249)</li>
                  <li className="py-3">Exported student list for Fall 2025</li>
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg">Register a Student</button>
                  <button className="w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg">Generate Report</button>
                  <button className="w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg">View All Courses</button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
