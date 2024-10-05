import Header from '@/components/Header';
import React from 'react';

const SignUp = () => {
  return (
    <body className="bg-black min-h-screen">
      <Header />
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="flex justify-center items-center min-h-screen pt-16">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-[#0e0e20cc] p-10 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-left mb-5 glow-text">
            Sign Up
          </h2>
          <form className="w-full">
            <div className="flex flex-col w-full my-5">
              <label htmlFor="username" className="text-gray-300 mb-2">
                Username
              </label>
              <input
                type="username"
                id="username"
                placeholder="Enter Username"
                className="bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg"
              />
            </div>
            <div className="flex flex-col w-full my-5">
              <label htmlFor="email" className="text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg"
              />
            </div>
            <div className="flex flex-col w-full my-5">
              <label htmlFor="password" className="text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg"
              />
            </div>
            <button
              type="button"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg text-white hover:shadow-lg transition-shadow duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default SignUp;

