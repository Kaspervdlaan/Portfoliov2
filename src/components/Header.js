import React, {useState} from 'react';
import logo from "../assets/logo.png"
import { FaHamburger} from "react-icons/fa"
import { ImCross } from "react-icons/im"
import {animate, motion} from "framer-motion";

import Aside from "./Aside";
import Footer from "./Footer";


function Header({state, setProjects, setAbout, setContact, setNone}) {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        if (menu) {
            setMenu(!menu)
        }
    }

    return (
        <header className="flex fixed w-screen text-white justify-between h-[15vh] p-1 z-10">
            <motion.picture onClick={setNone} animate={{opacity: 100, y: 0}} initial={{opacity: 0, y: -200}} transition={{type: 'spring',delay: .2, duration: .7}} className="flex items-center p-1 z-10 ml-4">
                <a href="#home" onClick={closeMenu}><img className="h-20" src={logo} alt="logo"/></a>
            </motion.picture>

            <ul className="hidden md:flex items-center text-xl mr-8">
                <motion.a animate={{opacity: 100, y: 0}} initial={{opacity: 0, y: -200}} transition={{type: 'spring',delay: .3, duration: .7}} href="#projects">
                    <li onClick={setProjects} className={state === "projects" ? "px-6 text-pink-color underline underline-offset-2 cursor-pointer" : "projects ? px-6 hover:text-pink-color hover:underline underline-offset-2 cursor-pointer"}>
                        Projects
                    </li>
                </motion.a>
                <motion.a animate={{opacity: 100, y: 0}} initial={{opacity: 0, y: -200}} transition={{type: 'spring',delay: .4, duration: .7}} href="#about">
                    <li onClick={setAbout} className={state === "about" ? 'px-6 text-blue-color underline underline-offset-2 cursor-pointer' : 'px-6 hover:text-blue-color hover:underline underline-offset-2 cursor-pointer'}>
                        About
                    </li>
                </motion.a>
                {/*<motion.a animate={{opacity: 100, y: 0}} initial={{opacity: 0, y: -200}} transition={{type: 'spring',delay: .5, duration: .7}} href="#contact">*/}
                {/*    <li onClick={setContact} className={state === "contact" ? 'px-6 text-orange-color underline underline-offset-2 cursor-pointer' : 'px-6 hover:text-orange-color hover:underline underline-offset-2 cursor-pointer'}>*/}
                {/*        Contact*/}
                {/*    </li>*/}
                {/*</motion.a>*/}
            </ul>

             <div className={menu ? "flex absolute right-0 top-0 h-screen w-screen md:hidden items-center justify-center bg-dark-color duration-300 bg-opacity-90" : "flex absolute right-[-100vw] top-0 h-screen w-screen md:hidden items-center justify-center bg-dark-color duration-300"}>
                <ul className="flex flex-col gap-8 text-2xl items-center ">
                    <a href="#projects" onClick={handleMenu}><li className='px-6 '>Projects</li></a>
                    <a href="#about" onClick={handleMenu}><li className='px-6 '>About</li></a>
                    {/*<a href="#contact" onClick={handleMenu}><li className='px-6 '>Contact</li></a>*/}
                </ul>
            </div>

            <button onClick={handleMenu} className="flex items-center md:hidden p-1 mr-8 text-xl z-10">
                {!menu ? <FaHamburger/> : <ImCross/>}
            </button>

            <Aside/>
            <Footer/>
        </header>
    );
}

export default Header;