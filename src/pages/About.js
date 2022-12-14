import React from 'react';
import logo from "../assets/logo.png"
import {FaCss3Alt, FaHtml5, FaGitAlt, FaJsSquare, FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {useRef} from "react";
import {useInViewport} from "react-in-viewport";

function About({page, setAbout, setNone}) {
    const myRef = useRef();
    const { inViewport } = useInViewport(myRef);

    if (inViewport) {
        setAbout()
    }

    return (
        <main id={page} className="snap-start min-h-[100vh] py-24 flex flex-col lg:flex-row items-center text-white text-4xl md:text-5xl justify-center gap-8 max-w-screen-3xl bg-black-color ">
            <section ref={myRef} className="flex flex-col flex-1 items-center lg:items-end text-center md:text-right px-4">

                <h2 className="mb-4  font-bold">
                    <span className="hover:text-pink-color duration-200">Kasper </span>
                    <span className="hover:text-blue-color duration-200">van </span>
                    <span className="hover:text-green-color duration-200">der </span>
                    <span className="hover:text-orange-color duration-200">Laan</span>
                </h2>
                <p className="text-lg mb-4 md:max-w-[80%]">I am currently halfway finished doing the Fullstack developer bootcamp by NOVI hogeschool.
                </p>
                <p className="text-lg mb-4 md:max-w-[80%]"> In the last half year I’ve been hard at work following the front end side of the bootcamp. Here I have learned that I love the art of coding, from problem solving to always being able to learn more.
                </p>
                <p className="flex flex-wrap text-green-color text-7xl">
                    <FaHtml5 className=""/>
                    <FaCss3Alt className=""/>
                    <FaJsSquare className=""/>
                    <FaReact className="mx-1 "/>
                    <SiTailwindcss className=""/>
                    <FaGitAlt className=""/>
                </p>
            </section>

            <section className="flex flex-1 justify-start text-left px-4">

                <img className="md:max-w-xl object-contain p-2" src={logo} alt=""/>
            </section>
        </main>
    );
}

export default About;