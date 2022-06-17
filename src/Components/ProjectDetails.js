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
        <div>
            {projects.map(project => project.id.includes(id) &&
                <section className='grid grid-cols-2'>
                    <div className='w-24 h-24'><img className='w-full h-full' src={project.image} alt="" /></div>
                    <div><p>{project.description}</p></div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetails;