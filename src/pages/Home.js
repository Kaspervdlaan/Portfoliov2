import React from 'react';
import {animate, motion} from "framer-motion";
import parallax1 from "../assets/parallax1.png"
import {useRef} from "react";
import {useInViewport} from "react-in-viewport";

function Home({page, setNone}) {
    const homeRef = useRef();
    const { inViewport } = useInViewport(homeRef);

    if (inViewport) {
        setNone()
    }

    return (
        <motion.main ref={homeRef} animate={{opacity: 100}} initial={{opacity: 0}} transition={{duration: 10}} id={page}
                     className="snap-start flex items-center justify-center h-[100vh] bg-black-color ">

            <section  className="text-3xl md:text-4xl md:ml-20">
                <motion.h1
                    className="md:text-5xl text-orange-color mb-2 shadowxl"
                    animate={{opacity: 100, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{
                        type: 'spring',
                        delay: 0.6,
                        duration: .7
                }}>
                    Kasper van der Laan
                </motion.h1>
                <motion.h2
                    className="md:text-4xl text-gray-700"
                    animate={{opacity: 100, y: 0}}
                    initial={{opacity: 0, y: 100}}
                    transition={{
                        type: 'spring',
                        delay: .8,
                        duration: .7
                }}>
                    a <span className="text-white ">Fullstack</span> Developer
                </motion.h2 >

                <motion.a className="text-4xl text-gray-700"
                          animate={{opacity: 100, y: 0}}
                          initial={{opacity: 0, y: 800}}
                          transition={{
                              delay: 1.5,
                              duration: 5
                          }} href="#projects">
                    <button className="p-1 ml-[33%] mt-10 border rounded text-sm text-gray-300 border-gray-300 hover:text-pink-color hover:border-pink-color">
                        view projects
                    </button>
                </motion.a>
            </section>

            <section className="hidden md:flex justify-between">
                <div></div>
                <img className="w-[100%] md:w-[90%]" src={parallax1} alt=""/>
            </section>
        </motion.main>
    );
}

export default Home;