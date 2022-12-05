import React from 'react';
import Card from "../components/Card";
import galactic from "../assets/galactic.png";

function Projects() {
    return (
        <main className="md:min-h-[90vh] h-auto flex flex-col items-center text-white justify-center max-w-screen-3xl">


            <section className="flex justify-center flex-wrap h-fit gap-5 mx-20">
                <Card
                    image={galactic}
                    title="Galactic Universe Webapp"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    descTwo="Build using React, React hooks, React router, State, Authentication, Axios, Css modules."
                    react="ReactJs"
                    css="CSS"
                />
                <Card
                    image={galactic}
                    title="Bureau van Breukelen"
                    descOne="Website made for client. Bureau van Breukelen porfolio website."

                />
                <Card
                    image={galactic}
                    title="Galactic Poopy"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                />

            </section>
        </main>
    );
}

export default Projects;