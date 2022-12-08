import React, {useState} from 'react';
import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

function Footer() {
    const form = useRef();
    const [popup, setPopup] = useState(false);
    const [sent, setSent]= useState(false)

    const handleClick = () => {
        setPopup(!popup)
    }

    const send = () => {
        setSent(false)
    }

    const resetForm = () => {
        const textarea = document.getElementById('message');
        const input = document.getElementById('email');

        textarea.value = '';
        input.value = '';
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l37yjbj', 'template_4nzdrlm', form.current, 'TUrBsSvMuIfPa4Trp')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);

            })

        setSent(true)
        setTimeout(send, 1500)
        setTimeout(handleClick, 2000)

    };

    return (
        <motion.footer animate={{opacity: 100, y: 0}} initial={{opacity: 0, y: 200}} transition={{type: 'spring',delay: 2, duration: .7, bounce: .6}} className={!popup ? "flex flex-col w-[400px] mb-[-210px] mr-[-180px] h-fit text-xs bg-black fixed bottom-0 right-0 duration-100" : "flex flex-col w-[400px] mb-[0] h-fit text-xs bg-black fixed bottom-0 right-0 duration-100"}>
            <div className=" ">
                <p onClick={handleClick} className={popup ? "cursor-pointer text-orange-color" : "cursor-pointer text-green-color"}>{popup ? "[-]" : "[+]"}</p>
                <p onClick={handleClick} className="pl-5 cursor-pointer">Please send me a message...</p>
                <form typeof="submit" ref={form} onSubmit={sendEmail} className="flex flex-col border border-dashed mx-5 mt-4 px-4 pt-6 pb-2">
                    <div>
                    <label htmlFor="email">email:</label>
                    <input required={true} placeholder="john@johnson.com" name="email" type="email" id="email" className="bg-black focus:outline-none"/>
                    </div>
                    <div className="flex">
                    <label htmlFor="message">message:</label>
                    <textarea required={true} placeholder="type your message here" name="message" id="message" cols="30" rows="5" className="bg-black resize-none focus:outline-none"></textarea>
                    </div>
                    <p className="mb-2">Send your message?</p>
                    <div className="flex gap-7 mb-2 ">
                        <button type="submit" className="hover:text-green-color">[Y]es, send.</button>
                        <button onClick={resetForm} className="hover:text-orange-color">[N]o, delete.</button>
                    </div>
                    {sent && <p>Your message has been sent.</p>}
                </form>
                <p className="ml-4 mt-2 mb-1">~ root#</p>
            </div>
        </motion.footer>
    );
}

export default Footer;