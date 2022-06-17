import { Icon } from '@iconify/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div className='grid grid-cols-3'>
            {projects.map(project => <div key={project.id} className="card mt-3 w-96 bg-base-100 shadow-xl bg-slate-800 text-white">
                <figure><img className='h-56' src={project.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        {project.tech.map(badge => <div key={badge} className="badge badge-outline">{badge}</div>)}
                    </div>
                    <h2 className="card-title">
                        {project.title}
                    </h2>
                    <p>{project.description.slice(0,200)} <button className="badge">See more &nbsp;<Icon icon="ci:thin-big-right" /></button></p>
                    <div className="card-actions justify-center">
                        <a href="https://www.google.com/search?q=website+icon&sxsrf=ALiCzsYUNkztV1w0KZMuEq7nGUb2Sw15xQ:1655438723214&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigq63ozbP4AhWZ6nMBHVpxC64Q_AUoAXoECAEQAw&biw=1280&bih=657&dpr=1" rel='noreferrer' target="_blank"><button className="text-3xl border rounded-full p-2 mt-8 hover:bg-accent hover:text-white"><Icon icon="mdi:web" /></button></a>
                        <a href="https://www.google.com/search?q=website+icon&sxsrf=ALiCzsYUNkztV1w0KZMuEq7nGUb2Sw15xQ:1655438723214&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigq63ozbP4AhWZ6nMBHVpxC64Q_AUoAXoECAEQAw&biw=1280&bih=657&dpr=1" rel='noreferrer' target="_blank"><button className="text-3xl border rounded-full p-2 mt-8 hover:bg-accent hover:text-white"><Icon icon="akar-icons:github-fill" /></button></a>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Projects;