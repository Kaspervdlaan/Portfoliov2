import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"
import swal from "sweetalert";
import logo from "../assets/logo.png"

function Contact({page}) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l37yjbj', 'template_4nzdrlm', form.current, 'TUrBsSvMuIfPa4Trp')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                swal({
                    className: "alert",
                    title: "Message send!",
                    text: "",
                    button: "Continue...",
                });
            }, (error) => {
                console.log(error.text);
                swal({
                    className: "error",
                    title: "Something went wrong..",
                    text: "",
                    button: "Continue...",
                })
            })
    };
    return (
        <main id={page} className="snap-start min-h-[100vh] h-auto flex flex-col md:flex-row items-center text-white justify-center gap-8 max-w-screen-3xl ">

            <section className="md:w-[40%] text-xl mb-4">
                <form typeof="submit" ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
                    <h2 className="text-2xl">send me a message!</h2>
                    <label>
                        <input required placeholder="email" type="email" name="user_email" className="text-blue-color placeholder:text-blue-color bg-dark-color border-2 border-orange-color rounded-xl p-2 px-4 my-2"/></label>
                    <label>
                        <textarea required cols="30" rows="10" placeholder="message" name="message" className="text-pink-color placeholder:text-pink-color w-full bg-dark-color border-2 border-orange-color rounded-xl p-2 px-4 my-2 resize-none"/></label>
                    <button type="submit" id="send-button" className="bg-dark-color text-green-color border-2 border-orange-color rounded-xl p-1 px-4 hover:bg-orange-color hover:text-dark-color">send</button>
                </form>
            </section>

        </main>
    );
}

export default Contact;