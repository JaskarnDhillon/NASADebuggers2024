import React from 'react';
import { useState } from 'react';
import { FaChevronDown, FaCog, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';

const AdminHeader = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="flex items-center justify-between p-4 bg-white text-black w-full border-b border-black">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="mr-4 p-2 rounded hover:bg-gray-200">
                    <span className="text-2xl">☰</span>
                </button>
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="logo" className="h-14 grayscale-custom" />
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
            </div>
            <div className="flex items-center">
                <button className="flex items-center rounded hover:text-gray-950 mr-2">
                    <a target="_blank" href="/admin/settings">
                        <FaCog className="text-2xl mr-2" />
                    </a>
                </button>
                <button className="flex items-center rounded hover:text-gray-950 mr-2">
                    <a target="_blank" href="/faq">
                        <FaQuestionCircle className="text-2xl mr-2" />
                    </a>
                </button>
                <button className='flex items-center pt-2 pr-4 pb-2 pl-4 rounded hover:bg-gray-50 border border-black'>
                    <FaUserAlt className="text-2xl mr-2" />
                    <span>John Doe</span>
                    <FaChevronDown className="text-xl ml-2" />
                </button>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={toggleSidebar}
            ></div>

            <div
                className={`fixed top-0 left-0 w-80 h-full bg-white z-50 shadow-lg rounded-r-lg transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                        <a href="/admin/dashboard" className='flex items-center gap-2'>
                            <img src="/logo.svg" alt="logo" className="h-14 grayscale-custom" />
                            <h1 className="text-2xl font-bold">Admin Panel</h1>
                        </a>
                    </div>
                    <button onClick={toggleSidebar} className="p-2 rounded hover:bg-gray-200">
                        <span className="text-2xl">✖</span>
                    </button>
                </div>
                <nav>
                    <ul>
                        <li className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
                            <a className="block w-full h-full p-4 bg-transparent" href="/admin/dashboard">Dashboard</a>
                        </li>
                        <li className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
                            <a className="block w-full h-full p-4 bg-transparent" href="/admin/quizzes">Quizzes</a>
                        </li>
                        <li className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
                            <a className="block w-full h-full p-4 bg-transparent" href="/admin/users">Users</a>
                        </li>
                        <li className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
                            <a className="block w-full h-full p-4 bg-transparent" href="/admin/courses">Courses</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;