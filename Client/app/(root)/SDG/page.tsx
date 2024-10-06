"use client"; // Ensure this is the very first line

import React from 'react';

const SDG = () => {
  const sdgGoals = [
    "1. No Poverty", "2. Zero Hunger", "3. Good Health and Well-being", "4. Quality Education", 
    "5. Gender Equality", "6. Clean Water and Sanitation", "7. Affordable and Clean Energy", 
    "8. Decent Work and Economic Growth", "9. Industry, Innovation, and Infrastructure", 
    "10. Reduced Inequalities", "11. Sustainable Cities and Communities", 
    "12. Responsible Consumption and Production", "13. Climate Action", "14. Life Below Water", 
    "15. Life on Land", "16. Peace, Justice, and Strong Institutions", "17. Partnerships for the Goals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-blue-500 text-white flex flex-col items-center justify-start px-0 relative overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center mt-32 text-center space-y-6"> 
        <h1 className="text-6xl font-bold mb-8 earthy-text">Sustainable Development Goals</h1>
        <div className="max-w-3xl text-xl">
          <p className="drop-shadow-lg">
            SDGs are global goals created by the United Nations to make the world a better place for everyone. 
            They focus on protecting the environment, ensuring equality, and improving health, education, and economic growth.
          </p>
          <p className="drop-shadow-lg">
            These goals are important because they focus on solving global problems that impact our planet and future.
          </p>
        </div>
      </div>

      <div className="absolute top-[100px] left-[100px] w-32 h-32 bg-yellow-400 rounded-full shadow-lg animate-pulse z-0" style={{ boxShadow: '0 0 20px 10px rgba(255, 223, 0, 0.8)' }} />

      <div className="mt-10 mb-10 z-10">
        <img 
          src="/earth.png" 
          alt="Earth Illustration" 
          className="w-64 h-auto mx-auto"
        />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 z-10 max-w-4xl mx-auto">
        {sdgGoals.slice(0, 16).map((goal, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-lg">{goal}</h2>
            </div>
        ))}

        <div className="bg-gray-800 p-4 rounded-lg col-span-2 text-center">
            <h2 className="text-lg">17. Partnerships for the Goals</h2>
        </div>
      </div>

      <style jsx global>{`
        .earthy-text {
          background: linear-gradient(to right, #5B3A29, #7E9B6A); /* Earthy gradient */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Drop shadow applied to the text */
        }

        .animate-pulse {
          animation: pulse 2s infinite; /* Adjusted animation duration for slower pulse */
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default SDG;
