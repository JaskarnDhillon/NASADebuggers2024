import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaCog, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';

const AdminHeader = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [dateAndTime, setDateAndTime] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const currentDateTime = new Date().toLocaleString();
        setDateAndTime(currentDateTime);
    }, []);

    return (
        <header className="flex items-center justify-between p-4 bg-blue-600 text-white w-full border-b border-blue-700">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="mr-4 p-2 rounded hover:bg-blue-700 transition duration-200">
                    <span className="text-2xl">☰</span>
                </button>
                <a href="/admin/dashboard" className="flex items-center gap-4">
                    <img src="/logo.svg" alt="logo" className="h-14" />
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </a>
            </div>
            <div className="flex items-center">
                <a href="/admin/settings" className="mr-4 flex items-center hover:text-blue-200 transition duration-200">
                    <FaCog className="text-2xl" />
                </a>
                <a href="/faq" className="mr-4 flex items-center hover:text-blue-200 transition duration-200">
                    <FaQuestionCircle className="text-2xl" />
                </a>
                <div className='relative'>
                    <button className='flex gap-6 items-center px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition duration-200' onClick={toggleDropdown}>
                        <div className='flex gap-2'>
                            <FaUserAlt className="text-2xl" />
                            <span>John Doe</span>
                        </div>
                        <FaChevronDown className="text-xl" />
                    </button>
                    {isDropdownOpen && (
                        <div className='absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200'>
                            <ul>
                                <li className="hover:bg-gray-100">
                                    <a href="/logout" className="block px-4 py-2 text-black">Logout</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={toggleSidebar}
            ></div>

            <div
                className={`fixed top-0 left-0 w-80 h-full bg-blue-800 text-white z-50 shadow-lg rounded-r-lg transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-blue-700">
                    <div className="flex items-center gap-2">
                        <a href="/admin/dashboard" className='flex items-center gap-2'>
                            <img src="/logo.svg" alt="logo" className="h-14 grayscale-custom" />
                            <h1 className="text-2xl font-bold">Admin Panel</h1>
                        </a>
                    </div>
                    <button onClick={toggleSidebar} className="p-2 rounded hover:bg-blue-600 transition duration-200">
                        <span className="text-2xl">✖</span>
                    </button>
                </div>
                <div className="flex-col justify-space-betwee h-100">
                    <nav>
                        <ul>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" href="/admin/dashboard">Dashboard</a>
                            </li>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" href="/admin/courses">Courses</a>
                            </li>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" href="/admin/modules">Modules</a>
                            </li>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" href="/admin/quizzes">Quizzes</a>
                            </li>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" href="/admin/users">Users</a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" href="/admin/settings">Settings</a>
                            </li>
                            <li className="border-b border-blue-700 hover:bg-blue-600 cursor-pointer">
                                <a className="block w-full h-full p-4 bg-transparent" target="_blank" href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='fixed right-0 bottom-0 p-2 text-xs text-gray-200'>
                <p>{dateAndTime}</p>
            </div>
        </header>
    );
};

export default AdminHeader;