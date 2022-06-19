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
    // projects.map(project => project.id.includes(id) && setSigleProject(project))
    // console.log(singleProject);
    return (
        <div className='mt-10'>
            {projects.map(project => project.id.includes(id) &&
                <section className='grid grid-cols-2 h-48'>
                    <div className='w-96 h-96 grid grid-cols-2 gap-4 mx-auto border-r-2 border-dotted pr-36'>
                        <img className='w-48 h-48 mb-4' src={project.image} alt="" />
                        <img className='w-48 h-48 mb-4' src={project.image} alt="" />
                        <img className='w-48 h-48 mb-4' src={project.image} alt="" />
                        <img className='w-48 h-48 mb-4' src={project.image} alt="" />
                    </div>
                    <div><p>{project.description}</p></div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetails;