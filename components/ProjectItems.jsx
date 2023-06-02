import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProjectItems = ({ title, backgroundImg, projectUrl }) => {
    return (
        <div>
            <div className='relative flex transition  items-center shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#E6C400] to-[#f5e68f] '>
                <Image src={backgroundImg} alt='property' className='rounded-xl group-hover:opacity-20 transition' />
                <div className='hidden group-hover:block absolute justify-center items-center text-center top-[50%] left-[50%] translate-x-[-50%] transition translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider '>{title}</h3>
                    <p className='pb-4 pt-2 text-white'>Next JS</p>
                    <Link href={projectUrl}>
                        <p className=' py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectItems