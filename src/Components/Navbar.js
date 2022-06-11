import { Icon } from '@iconify/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
            <div className="drawer drawer-mobile drawer-end h-screen">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center backgroundImage hide-scrolbar">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-4 w-full text-center flex flex-col items-center justify-center dark">
                        {/* <!-- Sidebar content here --> */}
                        <Link to="/" className="mb-3 text-2xl p-3 white hover:text-xl hover:p-4 hover:duration-150 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="Home"><Icon icon="clarity:home-solid" color="white" /></Link>
                        <Link to="/contact" className="mb-3 text-2xl p-3 white hover:text-xl hover:p-4 hover:duration-150 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="About Me"><Icon icon="bi:person-fill" color="white" /></Link>
                        <Link to="/" className="mb-3 text-2xl p-3 white hover:text-xl hover:p-4 hover:duration-150 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="My projects"><Icon icon="ph:codesandbox-logo-fill" color="white" /></Link>
                        <a target="_blank" className="mb-3 text-2xl p-3 white hover:text-xl hover:p-4 hover:duration-150 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="Resume" rel="noreferrer" href="https://drive.google.com/file/d/1zbXETjHdBQadEJ6S4MxMCpG0an_aCjZ_/view?usp=sharing" download="mehedi_hasan_resume"><Icon icon="bi:person-lines-fill" color="white" /></a>
                        <Link to="/" className="mb-3 text-2xl p-3 white hover:text-xl hover:p-4 hover:duration-150 rounded-full hover:tooltip tooltip-open hover:tooltip-left" data-tip="Contact me"><Icon icon="eva:email-fill" color="white" /></Link>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;