import React from 'react';
import { FaBookOpen, FaUserFriends, FaEdit, FaTrash } from 'react-icons/fa';

const AdminQuizzesPage = () => {
  return (
    <section className='py-10 px-12 bg-gray-100 min-h-screen'>
      {/* Section One */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admin Quizzes</h1>
      </div>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaBookOpen className="text-4xl text-blue-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Total Quizzes</h2>
            <p className="text-4xl font-bold text-gray-900">45</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUserFriends className="text-4xl text-green-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Participants</h2>
            <p className="text-4xl font-bold text-gray-900">1234</p>
          </div>
        </div>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Quizzes List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Quizzes List</h2>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left">Quiz Title</th>
              <th className="py-3 px-4 text-left">Participants</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">Quiz 1</td>
              <td className="py-3 px-4">150</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline"><FaEdit /></button>
                <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Quiz 2</td>
              <td className="py-3 px-4">200</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline"><FaEdit /></button>
                <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
              </td>
            </tr>
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

export default AdminQuizzesPage;