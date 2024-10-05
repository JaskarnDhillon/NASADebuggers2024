'use client'
import { siderbarLinks } from '@/constants/';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarLinkItem from './SidebarLinkItem';
import { usePathname } from 'next/navigation';

const Siderbar = () => {
  const pathName = usePathname();
  return (
    <div className='sticky bg-[#000] left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-[#24232d] pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
      <div className="">
        <div className="">
        <Link
          href="/"
          className="flex items-center"
        >
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
          <ul className='w-full flex flex-col gap-1'>
            {siderbarLinks.map((item)=>{
              const isActive = pathName === item.route || pathName.startsWith(`${item.route}/dashboard`);
              return (
                <SidebarLinkItem
                title={item.title}
                icon={item.icon}
                route={item.route}
                isActive={isActive}
              />
              )
              })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <span className='text-[#8D8D8D] uppercase tracking-wider text-[11px]'>settings</span>
          <div className="pt-4 w-full">
            <Link href="/dashboard/settings" className='flex items-center gap-2'>
              <Image src="/settings.svg" alt="" width={25} height={25}/>
              <span className='text-[#8D8D8D]'>Settings</span>
            </Link>
          </div>
          <div className="pt-4 w-full">
            <Link href="/" className='flex items-center gap-2'>
              <Image src="/logout.svg" alt="" width={25} height={25}/>
              <span className='text-[#9cb2ff]'>Logout</span>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Siderbar