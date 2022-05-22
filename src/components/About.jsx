import React from "react";
import design from "../images/design.png";
import develop from "../images/develop.png";
import maintain from "../images/maintain.png";


export default function About() {
    let services = [
      {
        image: design,
        desc: "I'm a professional Frontend Developer experienced in Vue.js, React.js, Vanilla Javascript, Bootstrap, Vuetify, and Tailwindcss. I like writing clean code. ",
        title: "Frontend Development"
      },
      {
        image: develop,
        desc: "I'm conversant with building Rest APIs with PHP Laravel and Nodejs (MERN).",
        title: "Fullstack Development"
      },
      {
        image: maintain,
        desc: "When I am not developing web apps, I automate daily tasks with Python. ",
        title: "Python Automation"
      },
    ];
  
    return (
  
      <section id="about" className="about bg-white py-16">
        <div className="container px-4  mx-auto flex flex-col items-center" >
          <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">About Me</h2>
          <p className="text-left text-2xl w-2/3 mb-12">I'm Gerald, a passionate, self-taught Frontend Developer in Vue and React. I love building quality solutions to real-life problems.</p>
  
          {/* <span className="uppercase text-sm font-medium border-r-2 border-l-2 border-black px-4 py-2 text-black">Explore</span> */}
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-12 ">
  
            {
              services.map((service) => {
                return (
                  <div key={service.desc} className="flex py-2">
                    <figure className="w-12 flex-none -mr-4 -mt-2">
                      <img className="object-contain  relative" src={service.image} alt={service.title} />
                    </figure>
                    <div className="media-content flex-grow ">
                      <h2 className="text-lg uppercase text-black font-bold mb-3">{service.title}</h2>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  
  
  }
  