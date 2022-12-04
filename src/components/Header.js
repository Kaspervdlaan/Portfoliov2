import React, {useState} from 'react';
import logo from "../assets/Logo1.png"
import { FaHamburger, FaGithub, FaLinkedin } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { BsFillPersonLinesFill } from "react-icons/bs"

function Header() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="flex fixed w-screen justify-between h-20">
            <picture className="p-1 z-10">
                <img className="h-full" src={logo} alt="logo"/>
            </picture>

            <ul className="hidden md:flex items-center text-xl">
                <li className='px-6'>Projects</li>
                <li className='px-6'>About</li>
                <li className='px-6'>Services</li>
                <li className='px-6'>Contact</li>
            </ul>

            {menu && <div className="flex absolute left-0 top-0 h-screen w-screen md:hidden items-center justify-center">
                <ul className="flex flex-col gap-5 text-2xl items-center">
                    <li className='px-6'>Projects</li>
                    <li className='px-6'>About</li>
                    <li className='px-6'>Services</li>
                    <li className='px-6'>Contact</li>
                </ul>
            </div>}

            <button onClick={handleMenu} className="flex items-center md:hidden p-1 mr-3 text-xl z-10">
                {!menu ? <FaHamburger/> : <ImCross/>}
            </button>

            <aside className="hidden md:flex flex-col fixed top-[35%] left-0">
                <ul>
                    <li className="w-[140px] h-[60px] flex justify-between items-center bg-pink-600 ml-[-80px] hover:ml-[-0px] duration-300 ">
                        <a className="flex justify-around items-center w-full" href="">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[140px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-80px] hover:ml-[-0px] duration-300">
                        <a className="flex justify-around items-center w-full"  href="">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[140px] h-[60px] flex justify-between items-center bg-gray-600 ml-[-80px] hover:ml-[-0px] duration-300">
                        <a className="flex justify-around items-center w-full"  href="">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </aside>
        </header>
    );
}

export default Header;