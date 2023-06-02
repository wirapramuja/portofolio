import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'



const Navigasi = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const tanganiNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    })

    return (
        <>
            <div className={shadow ? 'fixed w-full h-20 shadow-md bg-white z-[100]' : 'fixed w-full h-20 bg-white z-[100]'}>
                <div className='flex justify-between items-center w-full h-full  px-2 2xl:px-16'>
                    <Image
                        src='/assets/alphaclogo.png'
                        alt=''
                        width={125}
                        height={50}

                    />
                    <div>
                        <ul className='hidden md:flex'>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                            </Link>
                        </ul>
                        <div onClick={tanganiNav} className='md:hidden cursor-pointer'>
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className={nav ? 'md:hidden  w-full h-screen bg-black/70' : ''}>
                    <div className={nav ? '  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Image
                                    src='/assets/alphaclogo.png'
                                    alt=''
                                    width={87}
                                    height={35}

                                />
                                <div onClick={tanganiNav} className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'>
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>Let us build something legendary together</p>
                            </div>
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                    <Link href='/'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b'>Home</li>
                                    </Link>
                                    <Link href='/#about'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b'>About</li>
                                    </Link>
                                    <Link href='/#skills'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b'>Skills</li>
                                    </Link>
                                    <Link href='/#project'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b'>Project</li>
                                    </Link>
                                    <Link href='/#contact'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b'>Contact</li>
                                    </Link>
                                </ul>
                                <div className='pt-40'>
                                    <p className='uppercase tracking-widest text-[#5651e5]'>Let us Connect</p>
                                    <div className='flex items-center justify-between w-full  my-4 sm:w-[80%]'>
                                        <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 p-3 duration-300 ease-in '>
                                            <FaLinkedin />
                                        </div>
                                        <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 p-3 duration-300 ease-in '>
                                            <FaGithub />
                                        </div>
                                        <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 p-3 duration-300 ease-in '>
                                            <AiOutlineMail />
                                        </div>
                                        <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 p-3 duration-300 ease-in '>
                                            <BsFillPersonLinesFill />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>

        </>
    )
}

export default Navigasi