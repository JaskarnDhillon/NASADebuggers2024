import { HeaderBoxProps } from '@/types'
import React from 'react'

const HeaderBox = ({title}:HeaderBoxProps) => {
  return (
    <div className='pt-10'>
        <h1 className='text-4xl font-semibold text-white'>{title}</h1>
    </div>
  )
}

export default HeaderBox