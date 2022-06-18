import React from 'react';
import image from '../images/mehedi.png'

const About = () => {
    return (
        <div>
            <section className='flex items-center bg-slate-700'>
                <div>
                    <h1>Md Mehedi hasan</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident laudantium, corporis, mollitia alias quod iste, aliquam amet magni expedita accusantium quibusdam ad eaque eius. Optio possimus magni praesentium minus!</p>
                </div>
                <div>
                    <img src={image} alt="" className=''/>
                </div>
            </section>
        </div>
    );
};

export default About;