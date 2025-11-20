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
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {loading ? <Loader /> : <StudentTable students={students} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageStudents;
