import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ProjectCards = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = (id) => {
        navigate(`/projects/${id}`)
    }
    return (
        <div>
            <div className={`grid lg:grid-cols-2 gap-x-16 ${location.pathname =='/projects' && 'lg:mt-[-350px] lg:mx-20'} lg:mx-10 mx-2 border-b-2 border-dotted border-[#114c67aa] pb-12`}>
                {projects.map(project =>
                    <div key={project.id} className="card lg:mt-20 mb-20 lg:mb-0 shadow-2xl bg-[#114c67aa] text-white">
                        <figure><img className='h-80 w-full' src={project.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-start">
                                {project.tech.map(badge => <div key={badge} className="badge badge-outline">{badge}</div>)}
                            </div>
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <p>{project.description.slice(0, 200)} <button className="badge bg-cyan-600" onClick={() => redirect(project.id)}>See more &nbsp;<Icon className='text-xl' icon="ci:small-long-right" /></button></p>
                            <div className="card-actions justify-center">
                                <a href={project.live} rel='noreferrer' target="_blank"><button className="text-2xl border border-accent rounded-full p-2 mt-8 hover:bg-accent mr-2 hover:text-white tooltip" data-tip="Live site"><Icon icon="mdi:web" /></button></a>
                                <a href={project.github[0]} rel='noreferrer' target="_blank"><button className="text-2xl border border-accent rounded-full p-2 mt-8 hover:bg-accent hover:text-white tooltip" data-tip="Github"><Icon icon="akar-icons:github-fill" /></button></a>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default ProjectCards;