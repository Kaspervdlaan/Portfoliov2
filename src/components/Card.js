import React from 'react';

import {FaFirefox, FaGithub, FaLinkedin} from "react-icons/fa";


function Card({image, title, descOne, descTwo, children, react, css}) {
    return (
        <article className="flex flex-col flex-1 min-w-[350px] grow-0 p-2 my-4 rounded-xl border-2 border-[#d59623] duration-200 hover:scale-[1.02]">
            <picture className="pb-2 cursor-pointer border-b border-b-[#d59623]">
                <img className="rounded" src={image} alt="image"/>
            </picture>
            <div className="p-2">
                <h2 className="text-lg underline underline-offset-2 mb-1">{title}</h2>
                <h3 className="mb-1 ">Front-end space news/data web application featuring data from five different api endpoints.</h3>
                <p className="mb-2">Build using React, React hooks, React router, State, Authentication, Axios, Css modules.
                    </p>
                <span className="p-1 mt-1 border text-green-color rounded border-green-color-color">
                    {react}
                </span>
                <span className="p-1 mt-1 border text-green-color rounded border-green-color">
                    {css}
                </span>
                <p className="flex justify-end gap-1 text-2xl text-blue-color"> <FaGithub/><FaFirefox/> </p>
            </div>
        </article>
    );
}

export default Card;