import React from 'react';
import { FaChevronDown, FaCog, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';

const AdminHeader = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-black w-full border-b border-black">            <div className="flex items-center">
                <button className="mr-4 p-2 rounded hover:text-gray-950">
                    <span className="text-2xl">☰</span>
                </button>
                <div className='flex items-center gap-4'>
                    <img src="/logo.svg" alt="logo" className="h-10" />
                    <h1 className="text-2xl">Admin Panel</h1>
                </div>
            </div>
            <div className="flex items-center">
                <button className="flex items-center rounded hover:text-gray-950 mr-2">
                    <FaCog className="text-2xl mr-2" />
                </button>
                <button className="flex items-center rounded hover:text-gray-950 mr-2">
                    <FaQuestionCircle className="text-2xl mr-2" />
                </button>
                <button className='flex items-center p-2 rounded hover:bg-gray-50 border border-black'>
                    <FaUserAlt className="text-2xl mr-2" />
                    <span>John Doe</span>
                    <FaChevronDown className="text-2xl ml-2" /> 
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;