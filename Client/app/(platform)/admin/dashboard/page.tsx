import React from 'react';
import { FaUsers, FaBook, FaCheckCircle, FaLayerGroup } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <section className="py-10 px-12 bg-gray-100 min-h-screen">

      {/* Section One */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUsers className="text-4xl text-blue-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">User Count</h2>
            <p className="text-4xl font-bold text-gray-900">1234</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaBook className="text-4xl text-green-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Courses Count</h2>
            <p className="text-4xl font-bold text-gray-900">56</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaCheckCircle className="text-4xl text-yellow-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Completed Quizzes</h2>
            <p className="text-4xl font-bold text-gray-900">312</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaLayerGroup className="text-4xl text-red-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Modules Count</h2>
            <p className="text-4xl font-bold text-gray-900">78</p>
          </div>
        </div>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Section Two */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">User Activity</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Line Graph Placeholder</span>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Course Completion</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Pie Chart Placeholder</span>
          </div>
        </div>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Section Three */}

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

export default AdminDashboard;