import React, { useState, useEffect } from 'react';
import StudentTable from '../components/StudentTable';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setStudents([
        { studentId: '101', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { studentId: '102', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Manage Students</h1>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Add New Student
              </button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {loading ? <div className="p-8"><Loader /></div> : <StudentTable students={students} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageStudents;
