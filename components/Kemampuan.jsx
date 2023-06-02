import Image from 'next/image'
import React from 'react'

const Kemampuan = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-[#E6C400] uppercase tracking-widest text-xl'>Skills</p>
                <h2 className='py-4'>What can I do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/html.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>HTML</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/css.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>CSS</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/javascript.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>Javascript</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/react.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>React</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/tailwind.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>Tailwind</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/nextjs.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>Next JS</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/mongo.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>Mongo DB</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/supabase.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>Supabase</h3>
                            </div>


                        </div>
                    </div>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center '>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/prisma.png'
                                    alt='html'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div>
                                <h3>Prisma</h3>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Kemampuan