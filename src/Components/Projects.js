import { Icon } from '@iconify/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../images/wave.png'
import Footer from './Footer';
import './Project.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const navigate = useNavigate();
    const redirect = (id) => {
        navigate(`/projects/${id}`)
    }
    return (
        <div className=''>
            <div className='relative'>
                <img src={image} alt="" />
                <div className='absolute lg:top-14 top-6 inset-x-1/2 flex flex-col items-center'>
                    <p className='lg:text-4xl text-2xl text-white font-serif border-b-2 border-white'>Portfolio</p>
                    <p className='border w-44 lg:w-48 rounded-full p-2 text-center text-white lg:text-xl text-lg lg:mt-12 mt-6 font-sans'>Most recent works</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-x-16 lg:mt-[-350px] lg:mx-20 border-b-2 border-dotted border-cyan-700 pb-12'>
                {projects.map(project =>
                    <div key={project.id} className="card lg:mt-20 mb-20 lg:mb-0 shadow-2xl bg-[#114c67aa] text-white">
                        <figure><img className='h-56 w-full' src={project.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-start">
                                {project.tech.map(badge => <div key={badge} className="badge badge-outline">{badge}</div>)}
                            </div>
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <p>{project.description.slice(0, 200)} <button className="badge" onClick={() => redirect(project.id)}>See more &nbsp;<Icon className='text-xl' icon="ci:small-long-right" /></button></p>
                            <div className="card-actions justify-center">
                                <a href="https://www.google.com/search?q=website+icon&sxsrf=ALiCzsYUNkztV1w0KZMuEq7nGUb2Sw15xQ:1655438723214&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigq63ozbP4AhWZ6nMBHVpxC64Q_AUoAXoECAEQAw&biw=1280&bih=657&dpr=1" rel='noreferrer' target="_blank"><button className="text-3xl border border-accent rounded-full p-2 mt-8 hover:bg-accent hover:text-white"><Icon icon="mdi:web" /></button></a>
                                <a href="https://www.google.com/search?q=website+icon&sxsrf=ALiCzsYUNkztV1w0KZMuEq7nGUb2Sw15xQ:1655438723214&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigq63ozbP4AhWZ6nMBHVpxC64Q_AUoAXoECAEQAw&biw=1280&bih=657&dpr=1" rel='noreferrer' target="_blank"><button className="text-3xl border border-accent rounded-full p-2 mt-8 hover:bg-accent hover:text-white"><Icon icon="akar-icons:github-fill" /></button></a>
                            </div>
                        </div>
                    </div>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;