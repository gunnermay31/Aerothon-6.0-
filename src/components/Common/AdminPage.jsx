// src/AdminPage.js
import React, { useState } from 'react';
import UserRow from './UserRow';

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', isApproved: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isApproved: false },
    // Add more users as needed
  ]);

  const toggleApproval = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, isApproved: !user.isApproved } : user
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <UserRow key={user.id} user={user} onToggleApproval={toggleApproval} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
