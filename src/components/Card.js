import React from 'react';

import {FaFirefox, FaGithub} from "react-icons/fa";



function Card({image, title, descOne, descTwo, github, url, liveDemo, react, css, mui}) {
    return (

            <article
            className="flex flex-col flex-1 min-w-[400px] sm:min-w-[350px] grow-0 px-4 py-4 my-4 rounded-xl bg-black-color bg-opacity-90 shadow-2xl duration-200 hover:scale-[1.01]">

            <picture className="pb-2 cursor-pointer border-b border-b-gray-500">
                <a href={url} target="_blank" rel="noreferrer"><img className="rounded" src={image} alt="image"/></a>
            </picture>
            <div className="p-2 flex flex-col h-full justify-between">
                <h2 className="text-xl underline underline-offset-2 mb-1">{title}</h2>
                <h3 className="mb-1 ">{descOne}</h3>
                <p className="mb-2 text-gray-500">{descTwo}
                </p>
                <div className="flex justify-between items-center">
                    <div>
                      <span className="p-1 mt-1 mr-1 border border-orange-color rounded text-sm text-orange-color">
                    {react && react}
                </span>
                        <span className="p-1 mt-1 mr-1 border border-orange-color rounded text-sm text-orange-color">
                    {css && css}
                </span>
                {mui &&
                <span className="p-1 mt-1 mr-1 border border-orange-color rounded text-sm text-orange-color">
                    {mui}
                </span>}
                    </div>

                    <p className="flex justify-end gap-1 text-3xl text-blue-color cursor-pointer">
                        <a href={github} target="_blank" rel="noreferrer"><FaGithub className="hover:text-pink-color cursor-pointer"/></a>
                        {liveDemo && <a href={liveDemo} target="_blank" rel="noreferrer"><FaFirefox className="hover:text-pink-color cursor-pointer"/></a>}</p>
                </div>


            </div>

        </article>
    );
}

export default Card;