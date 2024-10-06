import React from 'react';
import { FaUserCog, FaLock, FaDatabase, FaBell, FaRegSave } from 'react-icons/fa';

const AdminSettingsPage = () => {
  return (
    <section className='py-10 px-12 bg-blue-50 min-h-screen'>
      {/* Section One */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admin Settings</h1>
      </div>

      {/* Settings Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* User Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUserCog className="text-4xl text-blue-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">User Settings</h2>
            <p className="text-gray-600">Manage user accounts and permissions.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Configure</button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaLock className="text-4xl text-green-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Security Settings</h2>
            <p className="text-gray-600">Manage security policies and settings.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Configure</button>
          </div>
        </div>

        {/* Database Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaDatabase className="text-4xl text-red-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Database Settings</h2>
            <p className="text-gray-600">Configure database connection and settings.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Configure</button>
          </div>
        </div>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Notification Settings Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Notification Settings</h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Email Notifications for New Users</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Email Notifications for Course Updates</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Push Notifications for System Alerts</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Daily Summary Emails</span>
          </label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          <FaRegSave className="inline mr-2" /> Save Notifications Settings
        </button>
      </div>

      <hr className='mt-8 mb-8' />

      {/* Theme Settings Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Theme Settings</h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="radio" name="theme" value="light" className="mr-2" />
            <span>Light Theme</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="radio" name="theme" value="dark" className="mr-2" />
            <span>Dark Theme</span>
          </label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          <FaRegSave className="inline mr-2" /> Save Theme Settings
        </button>
      </div>

      {/* API Access Settings Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">API Access Settings</h2>
        <p className="text-gray-600 mb-4">Manage your API access keys and permissions.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
          Generate New API Key
        </button>
        <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="font-semibold">Current API Key:</h3>
          <p className="text-gray-500">abcd1234efgh5678ijkl91011mnop</p>
        </div>
      </div>

      {/* User Role Management Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">User Role Management</h2>
        <p className="text-gray-600 mb-4">Assign roles to users and manage permissions.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
          Manage User Roles
        </button>
      </div>

      {/* Backup & Restore Settings Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Backup & Restore Settings</h2>
        <p className="text-gray-600 mb-4">Create backups of your data and restore when needed.</p>
        <div className='flex gap-5'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
            Create Backup
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
            Restore Backup
            </button>
        </div>
      </div>
    </section>
  );
};

export default AdminSettingsPage;