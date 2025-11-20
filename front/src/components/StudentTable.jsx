import React from 'react';

const StudentTable = ({ students = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Student ID</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? students.map((student) => (
            <tr key={student.studentId}>
              <td className="py-2 px-4 border-b text-center">{student.studentId}</td>
              <td className="py-2 px-4 border-b text-center">{student.firstName}</td>
              <td className="py-2 px-4 border-b text-center">{student.lastName}</td>
              <td className="py-2 px-4 border-b text-center">{student.email}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-4">Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" className="py-4 px-4 text-center">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
