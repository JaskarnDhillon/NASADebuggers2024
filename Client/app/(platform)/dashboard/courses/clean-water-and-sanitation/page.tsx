"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 

const CleanWaterSanitation = () => {
  const router = useRouter(); 

  const handleBeginClick = () => {
    router.push('/dashboard/courses/clean-water-and-sanitation/module-1');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-200 text-black flex flex-col items-center justify-start px-4 py-10 relative">
      <h1 className="text-4xl font-bold mb-6 text-center shadow-lg">Clean Water and Sanitation (SDG 6)</h1>
      <div className="max-w-3xl text-lg mb-8 text-center">
        <p>
          Sustainable Development Goal 6 (SDG 6) aims to ensure availability and sustainable management of water and sanitation for all. Access to clean water and sanitation is vital for human health and well-being, promoting sustainability and resilience against climate change.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Course Modules</h2>
      <ul className="list-disc list-inside text-lg mb-6">
        <li>Mission Overview</li>
        <li>Quiz 1</li>
        <li>Canada's Contribution</li>
        <li>Quiz 2</li>
        <li>Scientific Objectives</li>
        <li>Quiz 3</li>
        <li>Applications and Benefits</li>
        <li>Quiz 4</li>
      </ul>
    
      <button 
        className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300" 
        onClick={handleBeginClick}
      >
        Begin
      </button>
    </div>
  );
};

export default CleanWaterSanitation;