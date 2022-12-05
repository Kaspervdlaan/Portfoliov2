import React from 'react';
import Home from "./Home";
import Projects from "./Projects";
import Spacer from "../components/Spacer";

function Pages() {
    return (
        <div>
            <Spacer/>
            <Home/>
            <Spacer/>
            <Projects/>
        </div>
    );
}

export default Pages;