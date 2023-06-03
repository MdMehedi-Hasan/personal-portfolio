import React from 'react';
import { Icon } from '@iconify/react';
import myImage from '../images/mehedi.png'
import './Home.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
    return (
        <div>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myImage} alt="pic" className="lg:max-w-sm lg:ml-10 sm:w-full rounded-2xl shadow-2xl bg-slate-900" data-aos="fade-right" data-aos-duration="1500"/>
                    <div className='lg:ml-32'>
                        <div className='flex'>
                            <div className='w-1 h-18 mr-1 bg-green-300' data-aos="fade-down" data-aos-duration="1500"></div>
                            <div data-aos="fade-left" data-aos-duration="1500">
                                <h1 className="lg:text-5xl text-4xl font-bold">Md. Mehedi Hasan</h1>
                                <p>Front End Developer</p>
                            </div>
                        </div>
                        {/* <p className="py-6" data-aos="fade-up" data-aos-duration="1500">Hello visitor, I am Md. Mehedi Hasan. I am a professional front-end developer with MERN stack proficiency. I have the necessary skills to create professional full stack projects. I build user interface with React, Bootstrap, Tailwind, DaisyUI, Firebase. For backend integration I use Node.js, Express.js &amp; MongoDB.</p> */}
                        <p className="py-6" data-aos="fade-up" data-aos-duration="1500">Hello visitors, I'm Md. Mehedi Hasan a passionate front-end developer. With expertise in HTML, CSS, and JavaScript, I create captivating web experiences. Skilled in React and Vue.js, I build responsive interfaces that engage users. Let's collaborate and bring your ideas to life!😀</p>
                        <Link to="/about"><button className="btn min-h-fit h-fit btn-outline border-green-200 text-white px-0 rounded-full border-r-0 hover:bg-green-300 hover:text-black"><span className='px-4'>More about me</span> <span className='text-5xl text-white'><Icon icon="bi:arrow-right-circle-fill" /></span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;