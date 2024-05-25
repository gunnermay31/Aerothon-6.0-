// src/UserRow.js
import React from 'react';

const UserRow = ({ user, onToggleApproval }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <input
          type="checkbox"
          checked={user.isApproved}
          onChange={() => onToggleApproval(user.id)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </td>
    </tr>
  );
};

export default UserRow;
