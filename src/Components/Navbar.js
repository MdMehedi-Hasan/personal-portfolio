import { Icon } from '@iconify/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='grid gridCols h-screen'>
            <div className='flex justify-center items-center backgroundImage'>
                <Outlet></Outlet>
            </div>
            <div className='text-center flex flex-col items-center justify-center dark'>
                <Link to="/" className="mb-6 text-3xl"><Icon icon="clarity:home-solid" color="white" /></Link>
                <Link to="/contact" className="mb-6 text-3xl"><Icon icon="bi:person-fill" color="white" /></Link>
                <Link to="/" className="mb-6 text-3xl"><Icon icon="ph:codesandbox-logo-fill" color="white"/></Link>
                <a target="_blank" className="mb-6 text-3xl" rel="noreferrer" href="https://drive.google.com/file/d/1zbXETjHdBQadEJ6S4MxMCpG0an_aCjZ_/view?usp=sharing" download="mehedi_hasan_resume"><Icon icon="bi:person-lines-fill" color="white"/></a>
                <Link to="/" className="mb-6 text-3xl"><Icon icon="eva:email-fill" color="white"/></Link>
            </div>
        </div>
    );
};

export default Navbar;