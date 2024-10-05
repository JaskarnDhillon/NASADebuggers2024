'use client'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Calender from './Calender'
import Link from 'next/link'
  
const ProfileSidebar = () => {
    const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);
  return (
    <div className='sticky bg-[#000] border-l border-[#24232d] left-0 top-0 p-5 xl:flex flex-col items-center w-fit h-screen hidden  xl:w-[400px]'>
        <div className="flex justify-between items-center w-full">
            <h3 className="text-lg text-white">
                Your Profile
            </h3>
            <Dialog>
        <DialogTrigger asChild>
            <div className="cursor-pointer p-1">
                <Image src="/three-dots.svg" alt="" width={20} height={20}/>
            </div>
            
        </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right"/>
              Name
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

        </div>
        <div className="text-white flex flex-col mt-16 px-3 items-center">
            <div className="border-4 w-[100px] h-[100px] border-[#86a0ff] rounded-full">
                <Image
                    src="/defaultPfp.png"
                    alt="profile picture"
                    width={150}
                    height={150}
                    className="object-cover w-full"
                />
            </div>
            <h3 className="pt-4">
                {greeting} John
            </h3>
            <span className="capitalize text-gray-400 w-full text-center px-8 text-sm">
                continue your journey and achieve your target!
            </span>
        </div>
        <div className="mt-10">
            <Calender/>
        </div>
        <div className="mt-10 text-white w-full flex flex-col">
            <div className="flex justify-between items-center">
                <h3 className="text-xl">Learning Process</h3>
                <Link href="/dashboard/courses" className="capitalize mt-1 text-sm flex items-center gap-2 transition-all ease duration-300 opacity-70 hover:underline">
                    view all
                    <Image
                        src="/arrow-next.svg"
                        alt="right arrow"
                        className='opacity-70'
                        width={15}
                        height={15}/>
                </Link>
            </div>
            <div className="mt-5 bg-[#28292C] text-white flex flex-col gap-3 p-5 rounded-lg">
                <Link href="/" className='p-4 flex justify-between items-center bg-[#08A287] rounded-md transition-all ease duration-300 hover:opacity-80'>
                    <div className="flex gap-2 items-center">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center text-sm items-center bg-[#46bca6]">
                            DA
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-lg">Database App</span>
                            <span className="text-sm text-gray-300">15 Tasks</span>
                        </div>

                    </div>
                    <div className="">
                    <Image
                        src="/arrow-next.svg"
                        alt="right arrow"
                        className='opacity-70'
                        width={25}
                        height={25}/>
                    </div>
                </Link>
                <Link href="/" className='p-4 flex justify-between items-center bg-[#792AF9] rounded-md transition-all ease duration-300 hover:opacity-80'>
                    <div className="flex gap-2 items-center">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center text-sm items-center bg-[#8757d4]">
                            JS
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-lg">Intro To JS</span>
                            <span className="text-sm text-gray-300">8 Tasks</span>
                        </div>

                    </div>
                    <div className="">
                    <Image
                        src="/arrow-next.svg"
                        alt="right arrow"
                        className='opacity-70'
                        width={25}
                        height={25}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProfileSidebar