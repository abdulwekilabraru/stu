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
    <div className="flex h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">Register New Student</h1>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200">
              <StudentForm onSubmit={handleRegister} buttonText="Register Student" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegisterStudent;
