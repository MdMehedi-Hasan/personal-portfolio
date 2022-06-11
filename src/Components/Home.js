import React from 'react';
import { Icon } from '@iconify/react';
import myImage from '../images/mehedi.png'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myImage} alt="pic" className="max-w-sm rounded-lg shadow-2xl bg-slate-900" />
                    <div>
                        <h1 className="text-5xl font-bold">Md. Mehedi Hasan</h1>
                        <p>Junior Web Developer</p>
                        <p className="py-6">Hi, I am Md. Mehedi Hasan. I am a full stack developer. I build user interface with React,Bootstrap,Tailwind,Firebase. For backend i use Node.js,Exress.js,MongoDB.</p>
                        <Link to="/about"><button className="btn min-h-fit h-fit btn-outline border-green-200 text-white px-0 rounded-full border-r-0 hover:bg-green-300 hover:text-black"><span className='px-4'>More about me</span> <span className='text-5xl'><Icon icon="bi:arrow-right-circle-fill" color="#00C096" /></span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;