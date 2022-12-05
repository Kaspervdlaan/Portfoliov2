import React from 'react';

import {FaFirefox, FaGithub} from "react-icons/fa";


function Card({image, title, descOne, descTwo, github, liveDemo, react, css}) {
    return (
        <article
            className="flex flex-col flex-1 min-w-[350px] grow-0 p-2 my-4 rounded-xl border-2 border-[#d59623] duration-200 hover:scale-[1.01]">
            <picture className="pb-2 cursor-pointer border-b border-b-[#d59623]">
                <a href={liveDemo} target="_blank" rel="noreferrer"><img className="rounded" src={image} alt="image"/></a>
            </picture>
            <div className="p-2 flex flex-col h-full justify-between">
                <h2 className="text-xl underline underline-offset-2 mb-1">{title}</h2>
                <h3 className="mb-1 ">{descOne}</h3>
                <p className="mb-2">{descTwo}
                </p>
                <div className="flex justify-between items-center">
                    <div>
                      <span className="p-1 mt-1 mr-1 border text-green-color rounded border-green-color-color">
                    {react}
                </span>
                        <span className="p-1 mt-1 mr-1 border text-green-color rounded border-green-color">
                    {css}
                </span>
                    </div>

                    <p className="flex justify-end gap-1 text-3xl text-blue-color cursor-pointer">
                        <a href={github} target="_blank" rel="noreferrer"><FaGithub className="hover:text-pink-color cursor-pointer"/></a>
                        <a href={liveDemo} target="_blank" rel="noreferrer"><FaFirefox className="hover:text-pink-color cursor-pointer"/></a></p>
                </div>


            </div>
        </article>
    );
}

export default Card;