import { Icon } from '@iconify/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="drawer drawer-mobile drawer-end h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="w-full drawer-content backgroundImage hide-scrolbar">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-circle swap swap-rotate lg:hidden">
                    <input type="checkbox" />

                    {/* <!-- hamburger icon --> */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* <!-- close icon --> */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>

            </div>
            <div className="drawer-side w-auto">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 overflow-y-auto lg:w-full text-center flex flex-col items-center justify-center dark">
                    {/* <!-- Sidebar content here --> */}
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/" className='rounded-full white text-2xl p-3 hover:p-4 hover:text-lg hover:duration-300 hover:tooltip tooltip-open hover:tooltip-left' data-tip="Home"><Icon icon="clarity:home-solid" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/about" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="About Me"><Icon icon="bi:person-fill" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/projects" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="My projects"><Icon icon="zondicons:portfolio" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><a target="_blank" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="Resume" rel="noreferrer" href="https://drive.google.com/file/d/1zbXETjHdBQadEJ6S4MxMCpG0an_aCjZ_/view?usp=sharing" download="mehedi_hasan_resume"><Icon icon="fluent:document-bullet-list-24-filled" color="white" /></a></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/contact" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="Contact me"><Icon icon="eva:email-fill" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/blogs" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="Blogs"><Icon icon="dashicons:welcome-write-blog" color="white" /></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;