import { Icon } from '@iconify/react';
import React from 'react';
import image from '../images/wave.png'
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div>
            <section className=''>
                <img className='' src={image} alt="" />
                {/* <h1 className='text-4xl text-white text-center'>Hey mate! Welcome to my portfolio.</h1>
                <p className='text-xl text-white text-center'>Learn more about me</p> */}
            </section>
            <section className='text-white grid gap-16 grid-cols-1fr-2fr mx-10'>
                <aside className=' py-10 border-2 rounded-2xl'>
                    <div class="avatar flex justify-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h1 className='text-center mt-6 font-serif font-semibold text-lg'>Md. Mehedi Hasan</h1>
                    <p className='text-center my-5'>I am a web developer</p>
                    <div className='border-y-2 border-dotted w-11/12 h-24 mx-auto flex justify-center items-center mb-10 mt-5'>
                        <a className='mr-5' href="https://www.linkedin.com/in/mehedi-hasan-6127b3174/" rel="noreferrer" target="_blank"><Icon icon="akar-icons:linkedin-box-fill" /></a>
                        <a className='mr-5' href="https://github.com/MdMehedi-Hasan" rel="noreferrer" target="_blank"><Icon icon="akar-icons:github-fill" /></a>
                        <a href="https://twitter.com/MdMehediNiloi?t=vcUlsPZnJ-kgy5NliIceUA&s=09" rel="noreferrer" target="_blank"><Icon icon="akar-icons:twitter-fill" /></a>

                    </div>
                    <div className=' w-11/12 mx-auto pb-10 mb-10 border-b-2 border-dotted'>
                        <div className='flex items-center mb-2 justify-between'><span className='font-bold font-mono'>Country:</span><span>Bangladesh</span></div>
                        <div className='flex items-center mb-2 justify-between'><span className='font-bold font-mono'>City:</span><span>Dhaka</span></div>
                        <div className='flex items-center mb-2 justify-between'><span className='font-bold font-mono'>Email:</span><span className='text-sm'>mehedihasan.webdev@gmail.com</span></div>
                        <div className='flex items-center justify-between'><span className='font-bold font-mono'>Phone:</span><span>+8801320676252</span></div>
                    </div>
                    <Link to="/contact" className='flex justify-center mt-5 text-lg'><button className='flex items-center border px-4 py-2 rounded-full'><span className='mr-2'>Contact me</span> <Icon icon="eva:email-fill" /></button></Link>
                </aside>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda saepe a quis error. Delectus quos eveniet optio iusto. Voluptate, reiciendis quibusdam harum consequuntur aliquam sapiente reprehenderit quod consequatur quaerat.
                </div>
            </section>
        </div>
    );
};

export default About;