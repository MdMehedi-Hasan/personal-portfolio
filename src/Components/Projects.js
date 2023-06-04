import React from 'react';
import image from '../images/wave.png'
import Footer from './Footer';
import './Project.css'
import ProjectCards from './ProjectCards';

const Projects = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img className='w-full' src={image} alt="" />
                <div className='absolute lg:top-14 top-6 inset-x-1/2 flex flex-col items-center'>
                    <p className='lg:text-4xl text-2xl text-white font-serif border-b-2 border-white'>Portfolio</p>
                    <p className='border w-44 lg:w-48 rounded-full p-2 text-center text-white lg:text-xl text-lg lg:mt-12 mt-6 font-sans'>Most recent works</p>
                </div>
            </div>
            <div className='container mx-auto lg:px-0'>
            <ProjectCards></ProjectCards>
            </div>
            <div className=''>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Projects;