"use client"; // Ensure this is the very first line

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [isLaunching, setIsLaunching] = useState<boolean>(false);
  const [courses, setCourses] = useState<any[]>([]); // State for storing courses
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const router = useRouter(); // Initialize the router

  const handleCourseClick = (courseId: number) => {
    setSelectedCourse(courseId);
  };

  const handleBlastOffClick = () => {
    if (selectedCourse) {
      setIsLaunching(true);
      setTimeout(() => {
        setIsLaunching(false);
        router.push(`/dashboard/courses/${selectedCourse}`); // Redirect after animation
      }, 2000); // Adjusted duration to match the animation duration
    }
  };

  // Fetch courses from backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/courses'); // Replace with your backend API URL
        const data = await response.json();
        console.log('Courses:', data);
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
    createBackgroundStars(); // Call function to create background stars
  }, []);

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

  if (loading) {
    return <div className="text-white">Loading courses...</div>; // Display a loading message while fetching
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center flex-grow relative overflow-hidden">
      <h1 className="text-4xl mt-10 text-center z-10">Courses</h1>
      <div className="flex mt-5 justify-center space-x-4 z-10">
        {courses.length > 0 ? (
          courses.map((course) => (
            <button
              key={course._id} // Unique key for each button
              className={`flex flex-col items-center justify-center py-4 px-6 rounded-lg border-2 transition duration-300 ${selectedCourse === course._id ? 'bg-blue-600' : 'bg-gray-800'} hover:bg-blue-500`}
              onClick={() => handleCourseClick(course._id)}
            >
              <h2 className="text-2xl">{course.name}</h2>
              <p className="text-gray-400">{course.description}</p>
            </button>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>

      {/* Conditionally render the Blast Off button */}
      {selectedCourse && (
        <button
          className={`mt-10 py-3 px-6 rounded-lg text-white z-10 transition-transform duration-300 ${isLaunching ? 'animate-blastoff' : ''} fire-button`}
          onClick={handleBlastOffClick}
        >
          Blast Off
        </button>
      )}

      {/* Ship Animation */}
      {isLaunching && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/ship.png"
            alt="Ship"
            className="animate-launch ship-image" // Custom class for the ship
          />
        </div>
      )}

      {/* CSS for the stars and ship animation */}
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

        @keyframes launch {
          0% {
            transform: translateY(100vh); /* Start off-screen at the bottom */
          }
          100% {
            transform: translateY(-150vh); /* Move the ship off the screen */
          }
        }

        .animate-launch {
          animation: launch 4s forwards; /* Match the duration to the timeout */
        }

        .ship-image {
          width: 100px; /* Adjusted ship size */
          height: auto; /* Maintain aspect ratio */
        }

        .fire-button {
          background: linear-gradient(to bottom, rgba(255, 80, 0, 0.8), rgba(255, 200, 0, 0.8));
          border: 2px solid rgba(255, 200, 0, 0.9);
          box-shadow: 0 0 10px rgba(255, 200, 0, 0.9), 0 0 20px rgba(255, 80, 0, 0.9);
        }

        .fire-button:hover {
          background: linear-gradient(to bottom, rgba(255, 100, 0, 1), rgba(255, 250, 0, 1));
        }

        @keyframes blastoff {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1); /* Slightly increase size */
          }
          100% {
            transform: scale(1); /* Return to normal size */
          }
        }

        .animate-blastoff {
          animation: blastoff 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Courses;
