"use client"
import { useEffect, useState } from "react";
import { headerLinks } from "@/constants"; // Removed unused imports for brevity
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setBgColor("#f6fcff"); 
      } else {
        setBgColor("transparent"); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-[65px] fixed top-0 z-50 px-10 transition-all duration-500 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        <div className="w-[500px] h-full hidden lg:flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/about" className="cursor-pointer duration-300 transition-all ease-in text-[#094b65] hover:bg-[#094b65] hover:text-[#fff] py-1 px-4 rounded-full">
              About Us
            </Link>
            <Link href="#subjects" className="cursor-pointer duration-300 transition-all ease-in text-[#094b65] hover:bg-[#094b65] hover:text-[#fff] py-1 px-4 rounded-full">
              Subjects
            </Link>
            <Link href="/dashboard" className="cursor-pointer duration-300 transition-all ease-in text-[#094b65] hover:bg-[#094b65] hover:text-[#fff] py-1 px-4 rounded-full">
              My Progress
            </Link>
            <Link href="/contact" className="cursor-pointer duration-300 transition-all ease-in text-[#094b65] hover:bg-[#094b65] hover:text-[#fff] py-1 px-4 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-row items-center gap-5">
          <Link
            href="/sign-in"
            className="py-2 px-5 text-center text-white cursor-pointer rounded-lg duration-100 transition-all ease-in bg-[#094b65] hover:bg-[#0e6d93]"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className=" py-2 px-5 cursor-pointer text-[#094b65] rounded-lg duration-100 transition-all ease-in hover:bg-[#094b65] hover:text-[#fff]"
          >
            Register
          </Link>
        </div>

        <div className="flex gap-2 items-center lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  src="/hamburger-menu.svg"
                  alt="menu"
                  width={30}
                  height={30}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {headerLinks.map((item) => (
                <DropdownMenuItem key={item.title} className="py-2 px-4 rounded-[10px] text-sm">
                  <Link href={item.route}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
