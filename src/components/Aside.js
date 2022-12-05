import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";

function Aside() {
    return (
        <aside className="hidden md:flex flex-col fixed top-[35%] left-0">
            <ul>
                <li className="w-[140px] h-[50px] flex justify-between items-center bg-pink-color ml-[-90px] hover:ml-[-0px] duration-300 ">
                    <a className="flex justify-between items-center w-full ml-4 mr-2" href="">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[140px] h-[50px] flex justify-between items-center bg-blue-color ml-[-90px] hover:ml-[-0px] duration-300 ">
                    <a className="flex justify-between items-center w-full ml-4 mr-2" href="">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[140px] h-[50px] flex justify-between items-center bg-green-color ml-[-90px] hover:ml-[-0px] duration-300 ">
                    <a className="flex justify-between items-center w-full ml-4 mr-2" href="">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;