import React from 'react';
import { FaUsers, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const AdminUsersPage = () => {
  return (
    <section className='py-10 px-12 bg-gray-100 min-h-screen'>
      {/* Section One */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Users</h1>
      </div>
      
      {/* User Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUsers className="text-4xl text-blue-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-4xl font-bold text-gray-900">5678</p>
          </div>
        </div>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Users List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">Users List</h2>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg">
            <FaPlus className="mr-2" /> Add User
          </button>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">John Doe</td>
              <td className="py-3 px-4">john@example.com</td>
              <td className="py-3 px-4">Admin</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline"><FaEdit /></button>
                <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Jane Smith</td>
              <td className="py-3 px-4">jane@example.com</td>
              <td className="py-3 px-4">User</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline"><FaEdit /></button>
                <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
              </td>
            </tr>
            {/* Add more users as needed */}
          </tbody>
        </table>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Navigation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <a href="#" className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-50 transition duration-300">
          <h3 className="text-xl font-bold text-gray-700">Live Site</h3>
        </a>
        <a href="#" className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-50 transition duration-300">
          <h3 className="text-xl font-bold text-gray-700">GitHub Repo</h3>
        </a>
        <a href="#" className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-50 transition duration-300">
          <h3 className="text-xl font-bold text-gray-700">Settings</h3>
        </a>
        <a href="#" className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-50 transition duration-300">
          <h3 className="text-xl font-bold text-gray-700">FAQ</h3>
        </a>
      </div>
    </section>
  );
};

export default AdminUsersPage;