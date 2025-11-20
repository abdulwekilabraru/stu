import React from 'react';
import StudentForm from '../components/StudentForm';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const RegisterStudent = () => {
  const handleRegister = (data) => {
    console.log('Registering student:', data);
    // API call to register student
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Register New Student</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <StudentForm onSubmit={handleRegister} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegisterStudent;
