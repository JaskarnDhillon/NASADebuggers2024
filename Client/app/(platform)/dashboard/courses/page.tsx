"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderBox from '../../components/HeaderBox';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isLaunching, setIsLaunching] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  const handleBlastOffClick = () => {
    if (selectedCourse) {
      setIsLaunching(true);
      setTimeout(() => {
        setIsFadingOut(true); // Start fade out effect
      }, 2000); // Delay for the launch animation

      setTimeout(() => {
        router.push(`/dashboard/courses/${selectedCourse}`);
      }, 2500); // Redirect after fading out (2000ms launch + 500ms fade)
    }
  };

  const apiURL = process.env.NODE_ENV === 'production' ? process.env.PROD_SERVER_URL : process.env.DEV_SERVER_URL;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(apiURL + '/api/v1/courses');
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
    createBackgroundStars();
  }, []);

  const createBackgroundStars = () => {
    const totalStars = 200;

    for (let i = 0; i < totalStars; i++) {
      let star = document.createElement('div');
      star.classList.add('backgroundStar');

      let x = Math.random() * window.innerWidth - 20;
      let y = Math.random() * window.innerHeight - 20;

      star.style.left = x + 'px';
      star.style.top = y + 'px';

      star.style.animationDelay = Math.random() * 5 + 's';

      document.body.appendChild(star);
    }
  };

  if (loading) {
    return <div className="text-white">Loading courses...</div>;
  }

  return (
    <div className={`bg-black text-white min-h-screen flex flex-col items-center justify-center flex-grow relative overflow-hidden ${isFadingOut ? 'fade-out' : ''}`}>
      <HeaderBox title="Dashboard" />
      <div className="grid grid-cols-3 gap-6 mt-5 z-10 justify-center">
        {courses.length > 0 ? (
          courses.map((course) => (
            <button
              key={course._id}
              className={`w-[300px] flex flex-col items-center justify-center py-4 px-6 rounded-lg border-2 transition-all duration-300 ${selectedCourse === course.name ? 'selected-course' : 'hover-course'} ${!course.enabled ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={() => handleCourseClick(course.name)}
              disabled={!course.enabled}
            >
              <h2 className="text-2xl">
                {course.name
                  .split('-')
                  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </h2>
              <p className="text-gray-400">{course.description}</p>
            </button>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>

      {selectedCourse && (
        <button
          className={`fixed bottom-4 py-3 px-6 rounded-lg text-white z-10 transition-transform duration-300 ${isLaunching ? 'animate-blastoff' : ''} fire-button`}
          onClick={handleBlastOffClick}
        >
          Blast Off
        </button>
      )}

      {isLaunching && (
        <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
          <img src="/ship.png" alt="Ship" className="animate-launch ship-image" />
        </div>
      )}

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
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-150vh);
          }
        }

        .animate-launch {
          animation: launch 4s forwards;
        }

        .ship-image {
          width: 100px;
          height: auto;
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
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-blastoff {
          animation: blastoff 0.3s ease-in-out forwards;
        }

        .fade-out {
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }

        .hover-course {
          background: linear-gradient(135deg, rgba(9, 33, 68, 0.8), rgba(28, 181, 224, 0.8));
          border: 2px solid rgba(28, 181, 224, 0.7);
          box-shadow: 0 0 10px rgba(28, 181, 224, 0.7), 0 0 15px rgba(9, 33, 68, 0.9);
          color: white;
        }

        .hover-course:hover {
          background: linear-gradient(135deg, rgba(28, 181, 224, 1), rgba(9, 33, 68, 1));
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(28, 181, 224, 0.9), 0 0 30px rgba(9, 33, 68, 1);
        }

        /* Space-themed selected course */
        .selected-course {
          background: linear-gradient(135deg, rgba(255, 165, 0, 1), rgba(255, 69, 0, 1));
          border: 2px solid rgba(255, 165, 0, 0.7);
          box-shadow: 0 0 15px rgba(255, 165, 0, 0.9), 0 0 30px rgba(255, 69, 0, 1);
          animation: pulse-selected 2s infinite;
        }

        @keyframes pulse-selected {
          0% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(255, 165, 0, 0.9), 0 0 30px rgba(255, 69, 0, 1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(255, 165, 0, 1), 0 0 40px rgba(255, 69, 0, 1);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(255, 165, 0, 0.9), 0 0 30px rgba(255, 69, 0, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Courses;
