
import React from 'react'
import propertyImage from '../public/assets/projects/397.jpg'
import spotifyImg from '../public/assets/projects/spotify.jpg'



import ProjectItems from './ProjectItems'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-[#E6C400] uppercase text-xl tracking-widest'>Projects</p>
                <h2 className='py-4'>What I have built</h2>
                <div className='grid md:grid-cols-2 gap-8'>


                    <ProjectItems
                        title='Airbnb Clone'
                        backgroundImg={propertyImage}
                        projectUrl='https://minglebnb.vercel.app'
                    />
                    <ProjectItems
                        title='Spotify Clone'
                        backgroundImg={spotifyImg}
                        projectUrl='https://minglemusic.vercel.app'
                    />
                    


                </div>

            </div>
        </div>
    )
}

export default Projects