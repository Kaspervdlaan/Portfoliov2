import React, {useEffect, useRef, useState} from 'react';
import Card from "../components/Card";
import galactic from "../assets/galactic.png";
import bvb from "../assets/bvb.png";
import {animate, motion, useInView, useAnimation} from 'framer-motion'

function Projects({page}) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const animation = useAnimation();

    useEffect(() => {
        if(isInView){
            animation.start({
                y: 0,
                transition: {
                    type: 'spring',
                    duration: .8,
                    delay: .1
                }
            })
        }
        if (!isInView){
            animation.start({
                y: 200
            })
        }
        console.log(isInView)
    }, [isInView])

    return (
        <main id={page} className="snap-start md:min-h-[100vh] h-auto flex flex-col items-center text-white justify-center max-w-screen-3xl ">


            <motion.section ref={ref} animate={animation} className="flex justify-center flex-wrap h-fit gap-5 mx-20">
                <Card
                    image={galactic}
                    title="Galactic Universe Webapp"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    descTwo="Build using React, React hooks, React router, State, Authentication, Axios, Css modules."
                    github="https://github.com/Kaspervdlaan/SpaceApp"
                    liveDemo="https://chimerical-bublanina-2208d7.netlify.app/"
                    react="ReactJs"
                    css="CSS"
                />
                <Card
                    image={bvb}
                    title="Bureau van Breukelen"
                    descOne="Website made for client. Bureau van Breukelen porfolio website."
                    github="https://github.com/Kaspervdlaan/Bureau-van-Breukelen"
                    liveDemo="https://melodious-mousse-49311c.netlify.app/"
                    react="ReactJs"
                    css="Tailwind"
                />


                <Card
                    image={galactic}
                    title="Galactic Poopy"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    github=""
                    liveDemo=""
                    react="ReactJs"
                    css="Tailwind"
                />


            </motion.section>
        </main>
    );
}

export default Projects;