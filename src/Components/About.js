import { Icon } from '@iconify/react';
import React from 'react';
import image from '../images/wave.png'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom';
import './About.css'
import Footer from './Footer';
import ProjectCards from './ProjectCards';
import Typewriter from 'typewriter-effect';

const About = () => {

    return (
        <div className='text-white'>
            <section className=''>
                <img className='w-full' src={image} alt="" />
                {/* <h1 className='text-4xl text-white text-center'>Hey mate! Welcome to my portfolio.</h1>
                <p className='text-xl text-white text-center'>Learn more about me</p> */}
            </section>
            <section className='container mx-auto text-white grid gap-16 grid-cols-1fr-2fr lg:mt-[-180px]'>
                <aside className=' py-10 h-fit border-2 rounded-2xl lg:mt-[-250px] bg-cyan-900 border-cyan-900'>
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                    <h1 className='text-center mt-6 font-serif font-semibold text-lg'>Md. Mehedi Hasan</h1>
                    <p className='text-center my-5 flex justify-center'>I am a&nbsp; <Typewriter
                        options={{
                            strings: ['Front-end developer', 'MERN stack enthusiast', 'Bug fixer.'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                    <div className='border-y-2 border-dotted w-11/12 h-24 mx-auto flex justify-center items-center mb-10 mt-5'>
                        <a className='mr-5' href="https://www.linkedin.com/in/mehedi-hasan-6127b3174/" rel="noreferrer" target="_blank"><Icon icon="akar-icons:linkedin-box-fill" /></a>
                        <a className='mr-5' href="https://github.com/MdMehedi-Hasan" rel="noreferrer" target="_blank"><Icon icon="akar-icons:github-fill" /></a>
                        <a href="https://twitter.com/MdMehediNiloi?t=vcUlsPZnJ-kgy5NliIceUA&s=09" rel="noreferrer" target="_blank"><Icon icon="akar-icons:twitter-fill" /></a>

                    </div>
                    <div className=' w-11/12 mx-auto pb-10 mb-10 border-b-2 border-dotted'>
                        <div className='flex items-center mb-2 justify-between'><span className='font-bold font-mono'>Country:</span><span>Bangladesh</span></div>
                        <div className='flex items-center mb-2 justify-between'><span className='font-bold font-mono'>City:</span><span>Dhaka</span></div>
                        <div className='flex items-center mb-2 justify-between'><span className='font-bold font-mono'>Email:</span><small className='text-right'>mdmehedihasan9874@gmail.com</small></div>
                        <div className='flex items-center justify-between'><span className='font-bold font-mono'>Phone:</span><span>+8801320676252</span></div>
                    </div>
                    <Link to="/contact" className='flex justify-center mt-5 text-lg'><button className='flex items-center border px-4 py-2 rounded-full'><span className='mr-2'>Contact me</span> <Icon icon="eva:email-fill" /></button></Link>
                </aside>
                <div>
                    <div className='grid lg:grid-cols-3 text-center lg:text-left gap-5 h-36'>
                        <div className='border border-cyan-700 shadow-2xl flex flex-col lg:pl-5 justify-center rounded-xl bg-cyan-900'><div className='flex items-center lg:justify-start justify-center text-xl md:text-3xl lg:text-4xl'><Icon icon="ic:twotone-developer-mode" /><span>16+</span></div> <span className='mt-5 font-semibold'>Total projects</span></div>
                        <div className='border border-cyan-700 shadow-2xl flex flex-col lg:pl-5 justify-center rounded-xl bg-cyan-900'><div className='flex items-center lg:justify-start justify-center text-xl md:text-3xl lg:text-4xl'><Icon icon="ic:twotone-developer-mode" /><span>02</span></div><span className='mt-5 font-semibold'>Full stack projects</span></div>
                        <div className='border border-cyan-700 shadow-2xl flex flex-col lg:pl-5 justify-center rounded-xl bg-cyan-900'><div className='flex items-center lg:justify-start justify-center text-xl md:text-3xl lg:text-4xl'><Icon icon="ic:twotone-developer-mode" /><span>50+</span></div><span className='mt-5 font-semibold'>Repositories</span></div>
                    </div>
                    <div className="mt-40">
                        <div className='flex items-center'>
                            <h1 className='text-4xl mr-4'>Skills</h1>
                            <div className='w-11/12 h-4 border-b-2 border-cyan-900 border-dotted'></div>
                        </div>
                        <div className='flex flex-col lg:items-end items-center mt-10'>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>HTML</h1>
                                <progress class="progress progress-accent w-full mb-5" value="95" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>CSS</h1>
                                <progress class="progress progress-accent w-full mb-5" value="90" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>JavaScript</h1>
                                <progress class="progress progress-accent w-full mb-5" value="80" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>React</h1>
                                <progress class="progress progress-accent w-full mb-5" value="85" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>NodeJs</h1>
                                <progress class="progress progress-accent w-full mb-5" value="70" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>Express.js</h1>
                                <progress class="progress progress-accent w-full mb-5" value="80" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>MongoDB</h1>
                                <progress class="progress progress-accent w-full mb-5" value="75" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>Bootstrap</h1>
                                <progress class="progress progress-accent w-full mb-5" value="95" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>Tailwind css</h1>
                                <progress class="progress progress-accent w-full mb-5" value="90" max="100"></progress>
                            </div>
                            <div className='text-left w-9/12'>
                                <h1 className='text-left'>DaisyUI</h1>
                                <progress class="progress progress-accent w-full mb-5" value="95" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container grid lg:grid-cols-2 gap-14 mx-auto mt-28'>{/* lg:mx-10 mx-2 */}
                <div className='h-fit'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-4xl text-white'>About me</h1>
                        <div className='w-8/12 h-6 border-b-2 border-cyan-900 border-dotted'></div>
                    </div>
                    {/* <p className='mt-10'>Hello there, I am Md. Mehedi Hasan. I am a full stack web developer. I have the necessary skills to create professional full stack projects. I build user interface with React, Bootstrap, Tailwind, DaisyUI, Firebase. For backend integration I use Node.js, Express.js &amp; MongoDB. I can do awesome animation which are production ready. I am always open to explore new technologies. </p> */}
                    <p className='mt-10 text-justify'>Hi there! I'm Md. Mehedi Hasan a passionate front-end developer with a knack for creating engaging and intuitive web experiences. I love the intersection of design and technology, and I thrive on crafting pixel-perfect interfaces that bring ideas to life.
                    <br /><br />
                    With 2<sup>+</sup> years of experience in front-end development, I have honed my skills in HTML, CSS, and JavaScript to build responsive and visually appealing websites. I am well-versed in modern frameworks like React and Vue.js,leveraging their power to create dynamic and interactive user interfaces. I also have a strong understanding of web accessibility standards, ensuring that my code is inclusive and usable for all users.
                    </p>
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-4xl text-white'>Other information</h1>
                        <div className='w-5/12 h-6 border-b-2 border-cyan-900 border-dotted'></div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between items-center mb-5 mt-10'><span>Education:</span><span className='text-right'>Undergraduate, B.B.A honours. (Govt. Titumir College)</span></div>
                        <div className='flex justify-between items-center mb-5'><span>Communication:</span><span className='text-right'>Bangla(Native), English</span></div>
                        <div className='flex justify-between items-center mb-5'><span>Nationality:</span><span className='text-right'>Bangladeshi</span></div>
                        <div className='flex justify-between items-center mb-5'><span>Religion:</span><span className='text-right'>Islam</span></div>
                        <div className='flex justify-between items-center mb-5'><span>Interests:</span><span className='text-right'>Travelling, Gaming, Exploring</span></div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto'>
                <div className='flex items-center justify-between mx-2 lg:mx-10 mt-28'>
                    <h1 className='lg:text-4xl text-xl text-white'>Some of my recent projects</h1>
                    <div className='lg:w-7/12 w-1/4 h-6 border-b-2 border-cyan-900 border-dotted'></div>
                </div>
                <ProjectCards></ProjectCards>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;