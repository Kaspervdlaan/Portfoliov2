import React from 'react';
import logo from "../assets/logo.png"
import {FaCss3Alt, FaHtml5, FaGitAlt, FaJsSquare, FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";

function About() {
    return (
        <main
            className="md:min-h-[90vh] h-auto flex flex-col lg:flex-row items-center text-white text-5xl justify-center gap-8 max-w-screen-3xl ">
            <section className="flex flex-col flex-1 items-center lg:items-end text-center md:text-right px-4">
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
                    <FaHtml5 className="hover:text-blue-color"/>
                    <FaCss3Alt className="hover:text-blue-color"/>
                    <FaJsSquare className="hover:text-blue-color"/>
                    <FaReact className="mx-1 hover:text-blue-color"/>
                    <SiTailwindcss className="hover:text-blue-color"/>
                    <FaGitAlt className="hover:text-blue-color"/>
                </p>
            </section>

            <section className="flex flex-1 justify-start text-left px-4">

                <img className="lg:max-w-xl max-w-full p-2" src={logo} alt=""/>
            </section>
        </main>
    );
}

export default About;