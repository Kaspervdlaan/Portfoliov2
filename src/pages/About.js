import React from 'react';
import logo from "../assets/logo.png"
import {FaCss3Alt, FaHtml5, FaGitAlt, FaJsSquare, FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

function About({page}) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const animation = useAnimation();

    const animationLeft = () => {
        animation.start({
            x: 0,
            transition: {
                type: 'spring', duration: .8,
                staggerChildren: 1,
                delay: .1
            }
        })
    }

    const animationRight = () => {
        animation.start({
            x: 0,
            transition: {
                type: 'spring', duration: .8,
                staggerChildren: 1,
                delay: .1
            }
        })
    }

    useEffect(() => {
        if(isInView){
         animationLeft();
         animationRight();

        }
        if (!isInView){
            animation.start({
                x: 200
            })
        }
        console.log(isInView)
    }, [isInView])

    return (
        <main id={page} className="snap-start md:min-h-[100vh] h-auto flex flex-col lg:flex-row items-center text-white text-5xl justify-center gap-8 max-w-screen-3xl bg-black-color ">
            <motion.section ref={ref} animate={animation} className="flex flex-col flex-1 items-center lg:items-end text-center md:text-right px-4">
                <h2 className="mb-4 font-bold">
                    <span className="hover:text-pink-color duration-200">Kasper </span>
                    <span className="hover:text-blue-color duration-200">van </span>
                    <span className="hover:text-green-color duration-200">der </span>
                    <span className="hover:text-orange-color duration-200">Laan</span>
                </h2>
                <p className="text-lg mb-4 md:max-w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi, odit repudiandae. Atque cum distinctio doloribus est fuga fugiat!
                </p>
                <p className="text-lg mb-4 md:max-w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi, odit repudiandae.
                </p>
                <p className="flex flex-wrap text-green-color text-7xl">
                    <FaHtml5 className=""/>
                    <FaCss3Alt className=""/>
                    <FaJsSquare className=""/>
                    <FaReact className="mx-1 "/>
                    <SiTailwindcss className=""/>
                    <FaGitAlt className=""/>
                </p>
            </motion.section>

            <motion.section animate={animation} className="flex flex-1 justify-start text-left px-4">

                <img className="lg:max-w-xl max-w-full p-2" src={logo} alt=""/>
            </motion.section>
        </main>
    );
}

export default About;