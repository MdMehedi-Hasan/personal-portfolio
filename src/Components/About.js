import React from 'react';
import image from '../images/mehedi.png'

const About = () => {
    return (
        <div className='text-white h-screen cstmBackground'>
            <section className='flex items-center'>
                <div>
                    <h1>Md Mehedi hasan</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident laudantium, corporis, mollitia alias quod iste, aliquam amet magni expedita accusantium quibusdam ad eaque eius. Optio possimus magni praesentium minus!</p>
                </div>
                <div>
                    <img src={image} alt="" className='rounded-xl'/>
                </div>
            </section>
        </div>
    );
};

export default About;