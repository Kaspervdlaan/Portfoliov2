import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"
import galactic from "./../assets/galactic.png"

function Projects() {
    return (
        <main className="md:h-screen flex flex-col items-center justify-center max-w-screen-3xl">
            <h1>Projects</h1>

            <section className="flex flex-wrap gap-5 mx-20">
                <article className="flex flex-col flex-1 shadow-xl p-2 rounded duration-200 hover:scale-[1.02]">
                    <picture >
                        <img className="rounded" src={galactic} alt=""/>
                    </picture>
                    <div className="p-2">
                        <h2>Galactic Universe Webapp</h2>
                        <h3>Front-end space news/data web application featuring data from five different api endpoints.</h3>
                        <p>Build using React, React hooks, React router, State, Authentication, Axios, Css modules.
                            <span>ReactJs</span><span>CSS3</span></p>
                        <p className="flex gap-1"> <FaGithub/> <FaLinkedin/> </p>
                    </div>


                </article>
                <article className="flex flex-col flex-1 shadow-xl p-2 rounded">
                    <picture >
                        <img className="rounded" src={galactic} alt=""/>
                    </picture>
                    <div className="p-2">
                        <h2>Galactic Universe Webapp</h2>
                        <h3>Front-end space news/data web application featuring data from five different api endpoints.</h3>
                        <p>Build using React, React hooks, React router, State, Authentication, Axios, Css modules.
                            <span>ReactJs</span><span>CSS3</span></p>
                        <p> <FaGithub/> <FaLinkedin/> </p>
                    </div>


                </article>
                <article className="flex flex-col flex-1 shadow-xl p-2 rounded">
                    <picture >
                        <img className="rounded" src={galactic} alt=""/>
                    </picture>
                    <div className="p-2">
                        <h2>Galactic Universe Webapp</h2>
                        <h3>Front-end space news/data web application featuring data from five different api endpoints.</h3>
                        <p>Build using React, React hooks, React router, State, Authentication, Axios, Css modules.
                            <span>ReactJs</span><span>CSS3</span></p>
                        <p> <FaGithub/> <FaLinkedin/> </p>
                    </div>


                </article>
                <article className="flex flex-col flex-1 shadow-2xl p-2 rounded">
                    <picture >
                        <img className="rounded" src={galactic} alt=""/>
                    </picture>
                    <div className="p-2">
                        <h2>Galactic Universe Webapp</h2>
                        <h3>Front-end space news/data web application featuring data from five different api endpoints.</h3>
                        <p>Build using React, React hooks, React router, State, Authentication, Axios, Css modules.
                            <span>ReactJs</span><span>CSS3</span></p>
                        <p> <FaGithub/> <FaLinkedin/> </p>
                    </div>


                </article>

            </section>
        </main>
    );
}

export default Projects;