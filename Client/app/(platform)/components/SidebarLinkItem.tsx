import { SidebarLinkProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SidebarLinkItem = ({title,icon,route, isActive}:SidebarLinkProps) => {
  return (
    <div className={`my-4 rounded-md  ${isActive ? 'active_sidebar_link' : 'border-l-2 border-transparent'}`}>
        <Link href={route} className='flex items-center py-4 px-3 w-full gap-3'>
            <div className={`${isActive ? 'text-white' : 'text-[#8D8D8D]'}`}>
                {icon}
            </div>
            <span className={`${isActive ? 'text-white':'text-[#8D8D8D]'}`}>{title}</span>    
        </Link>
    </div>
  )
}

export default SidebarLinkItem