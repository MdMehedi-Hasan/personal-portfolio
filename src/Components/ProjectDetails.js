import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    // const [singleProject,setSigleProject] =useState([])
    const id = useParams().id
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='mt-10 text-white'>
            {projects.map(project => project.id.includes(id) &&
                <section className='grid lg:grid-cols-2 lg:mx-10 mx-5'>
                    <div className="card rounded-sm h-fit shadow-xl grid grid-cols-2 lg:gap-10 gap-5">
                        {project.image.map(picture => <figure><img src={picture} alt="Shoes" className='hover:scale-150 duration-300' /></figure>)}
                    </div>
                    {console.log(project.github.length)}
                    <div className='border-dotted border-cyan-700 lg:border-l-2 lg:ml-5 mt-5 lg:mt-0 lg:pl-5'>
                        <p className='text-lg mb-5 leading-10 font-sans'><b className='text-xl font-serif'>Title:</b> {project.title}</p>
                        <p className='text-lg mb-5 leading-10 font-sans'><b className='text-xl font-serif'>Live website:</b> <a href={project.live} target="_blank" rel="noopener noreferrer">Click here to visit live website</a></p>
                        <p className='text-lg mb-5 leading-10 font-sans'><b className='text-xl font-serif'>Client site code:</b><a href={project.github[0]} target="_blank" rel="noopener noreferrer"> Click here to visit client site code</a></p>
                        {project.github.length > 1 && <p className='text-lg mb-5 leading-10 font-sans'><b className='text-xl font-serif'>Server site code:</b><a href={project.github[1]} target="_blank" rel="noopener noreferrer"> Click here to visit server site code</a></p>}
                        <p className='text-lg mb-5 leading-10 font-sans'><b className='text-xl font-serif'>Technologies used:</b> {project.tech.map(tec => <span>{tec}, &nbsp;</span>)}</p>
                        <p className='text-lg mb-5 leading-10 font-sans'><b className='text-xl font-serif'>Project details:</b> {project.description}</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetails;