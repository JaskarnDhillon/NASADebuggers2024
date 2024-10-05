"use client"; // Ensure this is the very first line

import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const handleCourseClick = (course: number) => {
    setSelectedCourse(course);
  };

  const handleBlastOffClick = () => {
    if (selectedCourse) {
      console.log(`Redirecting to course: ${selectedCourse}`);
    }
  };

  // Function to create and place stars randomly for background
  const createBackgroundStars = () => {
    const totalStars = 200;

    for (let i = 0; i < totalStars; i++) {
      let star = document.createElement('div');
      star.classList.add('backgroundStar');

      // Randomize position
      let x = Math.random() * window.innerWidth - 20;
      let y = Math.random() * window.innerHeight - 20;

      star.style.left = x + 'px';
      star.style.top = y + 'px';

      // Randomize animation delay for twinkling effect
      star.style.animationDelay = Math.random() * 5 + 's';

      document.body.appendChild(star);
    }
  };

  useEffect(() => {
    createBackgroundStars();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center flex-grow relative overflow-hidden">
      <h1 className="text-4xl mt-10 text-center z-10">Courses</h1>
      <div className="flex mt-5 justify-center space-x-4 z-10">
        {[1, 2, 3].map((course) => (
          <button
            key={`course-${course}`} // Unique key for each button
            className={`flex flex-col items-center justify-center py-4 px-6 rounded-lg border-2 transition duration-300 ${selectedCourse === course ? 'bg-blue-600' : 'bg-gray-800'} hover:bg-blue-500`}
            onClick={() => handleCourseClick(course)}
          >
            <h2 className="text-2xl">Course {course}</h2>
            <p className="text-gray-400">Description for Course {course}.</p>
          </button>
        ))}
      </div>

      {/* Conditionally render the Blast Off button */}
      {selectedCourse && (
        <button
          className="mt-10 py-3 px-6 bg-blue-600 rounded-lg hover:bg-blue-500 z-10"
          onClick={handleBlastOffClick}
        >
          Blast Off
        </button>
      )}
      
      {/* CSS for the stars */}
      <style jsx global>{`
        .backgroundStar {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          opacity: 0.7;
          animation: twinkling 5s infinite;
          z-index: 1;
        }

        @keyframes twinkling {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Courses;
