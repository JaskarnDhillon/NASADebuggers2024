import React from 'react';
import { FaUsers, FaBook, FaCheckCircle, FaLayerGroup, FaExternalLinkAlt, FaGithub, FaCog, FaQuestionCircle } from 'react-icons/fa';

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

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Navigation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://sdg-innovation-lab.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            <FaExternalLinkAlt className="mr-2" /> Live Site
          </a>
          <a href="https://github.com/JaskarnDhillon/NASADebuggers2024" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition">
            <FaGithub className="mr-2" /> GitHub Repository
          </a>
          <a href="/admin/settings" className="flex items-center p-4 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition">
            <FaCog className="mr-2" /> Settings
          </a>
          <a href="/faq" className="flex items-center p-4 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition">
            <FaQuestionCircle className="mr-2" /> FAQ
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;