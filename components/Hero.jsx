import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <div id='hero' className='w-full h-screen text-center -z-10'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='text-sm tracking-widest text-gray-600'>LET&apos;S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700'>Hi, I&apos;m <span className='text-[#E6C400]'>Wira</span></h1>
                    <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto '>
                        I&apos;am front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, i&apos;m focused on building responsive front-end web applications while learning back-end technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] py-4 m-auto '>
                        <div className='rounded-full shadow-md hover:text-[#E6C400] shadow-gray-400 cursor-pointer hover:scale-105 p-6 duration-300 ease-in '>
                            <FaLinkedin />
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 hover:text-[#E6C400] p-6 duration-300 ease-in '>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 hover:text-[#E6C400] p-6 duration-300 ease-in '>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full hover:text-[#E6C400] shadow-md shadow-gray-400 cursor-pointer hover:scale-105 p-6 duration-300 ease-in '>
                            <BsFillPersonLinesFill />
                        </div>
                        <p className='-z-10'></p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero