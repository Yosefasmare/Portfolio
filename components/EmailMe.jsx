'use client'

import React from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { MousePointer2 } from 'lucide-react'

const EmailMe = () => {

    const myMail = 'yosidev8@gmail.com'

    const handeleEmail = () => {
        window.open(`mailto:${myMail}`);
      };

  return (
    <div className='flex justify-center items-center pt-6'>
    <HoverBorderGradient >
          <button onClick={handeleEmail} className='w-full h-full bg-transparent font-extrabold flex gap-1'>
            Let's Connect
            <MousePointer2 />
          </button>
    </HoverBorderGradient>
    </div>
  )
}

export default EmailMe
