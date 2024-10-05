import React from 'react';
import { FaBook, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const AdminModulesPage = () => {
  return (
    <section className='py-10 px-12 bg-blue-50 min-h-screen'>
      {/* Section One */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admin Modules</h1>
      </div>

      {/* Modules Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaBook className="text-4xl text-blue-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Total Modules</h2>
            <p className="text-4xl font-bold text-gray-900">50</p>
          </div>
        </div>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Modules List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">Modules List</h2>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg">
            <FaPlus className="mr-2" /> Add Module
          </button>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left">Module Title</th>
              <th className="py-3 px-4 text-left">Course</th>
              <th className="py-3 px-4 text-left">Quizzes Count</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">Module 1: Introduction</td>
              <td className="py-3 px-4">SDG 1: No Poverty</td>
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline"><FaEdit /></button>
                <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Module 2: Basics</td>
              <td className="py-3 px-4">SDG 2: Zero Hunger</td>
              <td className="py-3 px-4">3</td>
              <td className="py-3 px-4">
                <button className="text-blue-500 hover:underline"><FaEdit /></button>
                <button className="text-red-500 hover:underline ml-4"><FaTrash /></button>
              </td>
            </tr>
            {/* Repeat for more modules */}
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

export default AdminModulesPage;