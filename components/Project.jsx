import Image from 'next/image'
import React from 'react'
import Banner from '../public/banner.png'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

const Project = ({title,url,banner,desc,techUsed}) => {
  return (
    <div className='flex flex-col w-[350px] md:w-[500px] h-[450px] md:h-[530px] border-2 border-gray-600 rounded-xl overflow-hidden'>
         <div className='w-full h-[60%] flex justify-center items-center bg-gray-900 overflow-hidden p-3  object-cover '>
           <Image src={banner} alt='project pic' width={700} height={700} className='w-full object-contain rounded-xl' />
         </div>
         <div className='w-full h-[40%] flex flex-col p-2 gap-2'>
            <h1 className='font-extrabold text-4xl text-white'>{title}</h1>
            <p className='text-md text-gray-300'>
                {desc}
            </p>
            <div className='w-full p-4 bottom-0 flex justify-around  '>
                <div className='w-[60%] h-full flex justify-start'>
                    {techUsed.map(tech=>(
                        <div key={tech._key} className='w-[40px] h-[40px] rounded-full p-2 justify-center items-center  '>
                              <Image src={urlFor(tech).width(800).height(800).url()} height={800} width={800} alt='tech used'  className='w-full h-full '/>
                        </div>
                    ))}
                </div>
                <div className='w-[40%] flex h-full'>
                          <Link href={url} className='text-lg font-bold text-purple-400 gap-2 flex justify-center items-center'>
                          Check Live Site
                          <MoveUpRight />
                           </Link>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Project
