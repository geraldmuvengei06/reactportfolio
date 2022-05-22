import React from 'react';

import heroimage from "../images/development-stack.png";
import mail from "../images/mail.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";


export default function Hero() {
    let contact = [
        {
            name: "Email",
            icon: mail,
            href: "mailto:geraldmuvengei06@gmail.com"
        },
        {
            name: "Github",
            icon: github,
            href: "https://github.com/geraldmuvengei06"
        },
        {
            name: "Linkedin",
            icon: linkedin,
            href: "https://www.linkedin.com/in/gerald-muvengei/"
        }
    ]
    return (
        <section className="hero bg-blue-50 pt-12">


            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center my-12 md:my-24">
                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                    <h2 className="my-8">
                        <span className="text-2xl sm:text-4xl">Hi, I am</span> <br />
                        <span className="text-5xl sm:text-7xl font-bold is-title text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Gerald Muvengei </span> <br /><br />
                        <span className="text-3xl sm:text-4xl font-bold">I'm a Frontend Developer for Vue and React</span> <br />
                    </h2>
                    <p className='text-2xl'>
                        I will develop your Vuejs, Nuxtjs, Laravel Web app or website.
                    </p>

                    <div className="mb-8 flex">
                        {
                            contact.map((item) => {
                                return (
                                    <a href={item.href} key={item.href} target="_blank" rel="noreferrer" className="w-16 h-16 p-4 bg-indigo-50 filter drop-shadow-xl m-2"><img className="object-contain text-black" src={item.icon} alt={item.name} /></a>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <!--Right Col--> */}
                <div className="w-full hidden sm:block lg:w-1/2 lg:py-6 text-center">
                    <img className="object-fit" alt="geraldmuvengei" src={heroimage} />
                </div>
            </div>



        </section>
    )
}
