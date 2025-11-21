import React from 'react';

const StudentTable = ({ students = [] }) => {
  if (students.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">No student data available.</p>
        <p className="text-sm">Register a new student to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50/50 text-xs text-gray-700 uppercase tracking-wider">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold">Student ID</th>
            <th scope="col" className="px-6 py-4 font-bold">Full Name</th>
            <th scope="col" className="px-6 py-4 font-bold">Email</th>
            <th scope="col" className="px-6 py-4 font-bold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.studentId} className="hover:bg-gray-50/70 transition-colors duration-200">
              <td className="px-6 py-4 font-mono text-gray-500">{student.studentId}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{`${student.firstName} ${student.lastName}`}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                <button className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Edit</button>
                <button className="ml-6 font-medium text-red-600 hover:text-red-800 transition-colors duration-200">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
