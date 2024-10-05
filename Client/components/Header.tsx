import { headerLinks, Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";



const Header = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            learning
          </span>
        </Link>

        <div className="w-[500px] h-full hidden lg:flex flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/about" className="cursor-pointer">
              About Us
            </Link>
            <Link href="#subjects" className="cursor-pointer">
              Subjects
            </Link>
            <Link href="/dashboard" className="cursor-pointer">
              My Progress
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-row items-center gap-5">
          <div className="">
            <Link href="/sign-in" className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg">Login</Link>
          </div>
          <div className="">
            <Link href="/sign-up" className="button-secondary py-2 px-5 text-white cursor-pointer rounded-lg">Register</Link>
          </div>
        </div>
        <div className="flex gap-2 items-center lg:hidden">
          <div className="flex flex-row items-center gap-5">
            <div className="">
              <Link href="/sign-in" className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg">Login</Link>
            </div>
            <div className="">
              <Link href="/sign-up" className="button-secondary py-2 px-5 text-white cursor-pointer rounded-lg">Register</Link>
            </div>
          </div>
          <div className="block lg:hidden">
          <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer">
                    <Image src="/hamburger-menu.svg" alt="" width={30} height={30}/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                {headerLinks.map((item) => {
                    return (
                        <DropdownMenuItem  key={item.title} className="py-2 px-4 rounded-[10px] text-sm ">
                          <Link href={item.route}>
                            {item.title}
                          </Link>
                        </DropdownMenuItem>
                    );
                  })}
                  
                </DropdownMenuContent>
              </DropdownMenu> 
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
