import React, {useState} from 'react';
import logo from "../assets/logo.png"
import { FaHamburger, FaGithub, FaLinkedin } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { BsFillPersonLinesFill } from "react-icons/bs"

function Header() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="flex fixed w-screen bg-dark-color text-white justify-between h-[15vh] p-1 z-10">
            <picture className="p-1 z-10 ml-4">
                <img className="h-full" src={logo} alt="logo"/>
            </picture>

            <ul className="hidden md:flex items-center text-xl mr-4">
                <li className='px-6 hover:text-pink-color cursor-pointer'>Projects</li>
                <li className='px-6 hover:text-blue-color cursor-pointer'>About</li>
                <li className='px-6 hover:text-green-color cursor-pointer'>Services</li>
                <li className='px-6 hover:text-orange-color cursor-pointer'>Contact</li>
            </ul>

            {menu && <div className="flex absolute left-0 top-0 h-screen w-screen md:hidden items-center justify-center bg-dark-color">
                <ul className="flex flex-col gap-5 text-2xl items-center ">
                    <li className='px-6 '>Projects</li>
                    <li className='px-6 '>About</li>
                    <li className='px-6 '>Services</li>
                    <li className='px-6 '>Contact</li>
                </ul>
            </div>}

            <button onClick={handleMenu} className="flex items-center md:hidden p-1 mr-8 text-xl z-10">
                {!menu ? <FaHamburger/> : <ImCross/>}
            </button>

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
        </header>
    );
}

export default Header;