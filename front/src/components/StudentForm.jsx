import React, { useState } from 'react';

const StudentForm = ({ onSubmit, initialData = {}, buttonText = 'Submit' }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    email: initialData.email || '',
    studentId: initialData.studentId || '',
    course: initialData.course || '',
    year: initialData.year || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClasses = "mt-1 block w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-300 ease-in-out";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
          <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses} placeholder="e.g., John" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses} placeholder="e.g., Doe" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="e.g., john.doe@example.com" required />
      </div>
      <div>
        <label htmlFor="studentId" className="block text-sm font-semibold text-gray-700">Student ID</label>
        <input type="text" name="studentId" id="studentId" value={formData.studentId} onChange={handleChange} className={inputClasses} placeholder="e.g., STU12345" required />
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="course" className="block text-sm font-semibold text-gray-700">Course</label>
          <input type="text" name="course" id="course" value={formData.course} onChange={handleChange} className={inputClasses} placeholder="e.g., Computer Science" required />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-semibold text-gray-700">Year</label>
          <input type="number" name="year" id="year" value={formData.year} onChange={handleChange} className={inputClasses} placeholder="e.g., 2025" required />
        </div>
      </div>
      <div className="pt-4">
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
