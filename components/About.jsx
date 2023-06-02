import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <div className='uppercase text-xl tracking-widest text-[#E6C400]'>About</div>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>Hello there! I am Wira, a passionate web developer specializing in front-end wizardry and venturing into the realms of back-end enchantment.  With a knack for crafting visually stunning and user-friendly websites, I am dedicated to bringing your digital dreams to life. Currently honing my skills in front-end development, I am also diving into the captivating world of back-end technologies, eager to expand my repertoire. Let us collaborate and create extraordinary online experiences that leave a lasting impression. Together, we will weave code into captivating masterpieces!</p>
                    
                </div>
                <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300 cursor-pointer ease-in'>
                    <Image
                        src='/assets/about.jpg'
                        width={500}
                        height={500}
                        alt='about'
                        className='rounded-xl'


                    />
                </div>

            </div>
        </div>
    )
}

export default About