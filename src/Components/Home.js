import React from 'react';
import { Icon } from '@iconify/react';
import myImage from '../images/cropped2.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myImage} alt="pic" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Md. Mehedi Hasan</h1>
                        <p>Junior Web Developer</p>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur inventore animi delectus ab pariatur amet placeat voluptatum, esse, quisquam labore blanditiis, provident aliquid cum accusantium nulla. Totam nemo quia reiciendis!</p>
                        <button className="btn min-h-fit h-fit btn-outline border-green-200 text-white px-0 rounded-full border-r-0 hover:bg-green-300 hover:text-black"><span className='px-4'>More about me</span> <span className='text-5xl'><Icon icon="bi:arrow-right-circle-fill" color="#00C096" /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;