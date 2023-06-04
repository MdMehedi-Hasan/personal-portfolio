import { Icon } from '@iconify/react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();
    console.log(location);
    const home = '/'
    return (
        <div className={`drawer drawer-mobile drawer-end h-screen ${location.pathname === home && "backgroundImage"}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="w-full drawer-content hide-scrolbar">
                {/* <!-- Page content here --> */}
                <nav className="flex justify-end h-16 items-center lg:hidden">
                    <label htmlFor="my-drawer-2" className="btn btn-circle bg-transparent swap swap-rotate lg:hidden relative right-5 text-4xl">
                        <input type="checkbox" />

                        {/* <!-- hamburger icon --> */}
                        {/* <Icon icon="bx:menu-alt-right" /> */}

                        {/* <!-- close icon --> */}
                        <Icon icon="bx:menu-alt-right" />
                    </label>
                </nav>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side w-auto">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 overflow-y-auto lg:w-full text-center flex flex-col items-center justify-center">
                    {/* <!-- Sidebar content here --> */}
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/" className='rounded-full white text-2xl p-3 hover:p-4 hover:text-lg hover:duration-300'><Icon icon="clarity:home-solid" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/about" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full" ><Icon icon="bi:person-fill" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/projects" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full" ><Icon icon="zondicons:portfolio" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><a target="_blank" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full"  rel="noreferrer" href="https://drive.google.com/file/d/1QdcmbaKrUgvZrTH1RTJdiTV-GKmZSf90/view?usp=sharing" download="mehedi_hasan_resume"><Icon icon="fluent:document-bullet-list-24-filled" color="white" /></a></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/contact" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full" ><Icon icon="eva:email-fill" color="white" /></Link></div>
                    <div className="w-16 h-16 flex flex-col items-center justify-center"><Link to="/blogs" className="text-2xl p-3 white hover:text-lg hover:p-4 hover:duration-300 rounded-full" ><Icon icon="dashicons:welcome-write-blog" color="white" /></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;