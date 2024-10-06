"use client"; 
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import CoursesIcon from './CoursesIcon';

const Sidebar = () => {
  const pathName = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCleanWaterDropdownOpen, setCleanWaterDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleCleanWaterDropdown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); 
    setCleanWaterDropdownOpen(!isCleanWaterDropdownOpen);
};


  return (
    <div className='sticky bg-[#000] left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-[#24232d] pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
      <div className="">
        <div className="">
          <Link href="/" className="flex items-center">
            <Image
              src="/siderbar_logo.svg"
              alt="logo"
              width={45}
              height={45}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="tracking-wider uppercase ml-[10px] hidden md:block text-white">
              learning
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-start w-full pt-20">
          <span className='text-[#8D8D8D] uppercase tracking-wider text-[11px]'>Overview</span>
          <ul className='w-full flex flex-col gap-1 pt-2'>
            <li>
              <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                <CoursesIcon />
                <span className='text-[#8D8D8D] text-lg'>Courses</span>
                <span className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>&#9660;</span> {/* Down arrow */}
              </div>
              {isDropdownOpen && (
                <ul className="mt-2 pl-6 text-[#8D8D8D] text-sm">
                  <li>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Link 
                        href="http://localhost:3000/dashboard/courses/clean-water-sanitation"
                        className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-sanitation' ? 'text-[#9cb2ff]' : ''}`}
                        onClick={toggleCleanWaterDropdown}
                      >
                        Clean Water and Sanitation
                      </Link>
                      <span 
                        className={`transform transition-transform duration-200 ${isCleanWaterDropdownOpen ? 'rotate-180' : ''} ml-2`} 
                        onClick={toggleCleanWaterDropdown}
                      >
                        &#9660;
                      </span>
                    </div>
                    {isCleanWaterDropdownOpen && ( 
                      <ul className="mt-2 pl-4 text-[#8D8D8D] text-sm">
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-and-sanitation/mission-overview" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/mission-overview' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Mission Overview
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-1" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-1' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Quiz 1
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-and-sanitation/canadas-contribution" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/canadas-contribution' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Canada's Contribution
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-2" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-2' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Quiz 2
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-sanitation/scientific-objectives" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/scientific-objectives' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Scientific Objectives
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-sanitation/quiz-3" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-3' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Quiz 3
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-and-sanitation/applications-and-benefits" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/applications-and-benefits' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Applications and Benefits
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-4" 
                            className={`block hover:text-[#9cb2ff] ${pathName === 'http://localhost:3000/dashboard/courses/clean-water-and-sanitation/quiz-4' ? 'text-[#9cb2ff]' : ''}`}
                          >
                            Quiz 4
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <span className='text-[#8D8D8D] uppercase tracking-wider text-[11px]'>Settings</span>
        <div className="pt-4 w-full">
          <Link href="/dashboard/settings" className='flex items-center gap-2'>
            <Image src="/settings.svg" alt="" width={25} height={25} />
            <span className='text-[#8D8D8D]'>Settings</span>
          </Link>
        </div>
        <div className="pt-4 w-full">
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/logout.svg" alt="" width={25} height={25} />
            <span className='text-[#9cb2ff]'>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
