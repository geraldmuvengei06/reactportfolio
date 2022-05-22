import React from "react"
// icons
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import vuejs from '../images/vuejs.png';
import bootstrap from '../images/bootstrap.png';
import tailwind from '../images/tailwind.png';
import react from '../images/react.png';

// project images
import project from '../images/project.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

export default function Portfolio() {

    let projects = [
      {
        href: "https://sparemonger.com/",
        image: project3,
        title: "Frontend Development",
        desc: "Sparemonger website and webapp",
        tags: [tailwind, vuejs, javascript]
      },
      {
        href: "https://geraldmuvengei.com",
        image: project,
        title: "Frontend Development",
        desc: "Portfolio Website",
        tags: [tailwind, react, javascript]
      },
      {
        href: "https://kensoko.com",
        image: project1,
        title: "Frontend Development",
        desc: "Kensoko Ecommerce Website",
        tags: [vuejs, html, css, bootstrap]
      },
      {
        href: "https://vitron.co.ke",
        image: project2,
        title: "Frontend Development",
        desc: "Vitron Kenya Ecommerce Website",
        tags: [vuejs, bootstrap, javascript]
      },
    ]
  
    return (
      <section id="portfolio" className="bg-gradient-to-b from-light to-blue-100  py-16">
        <div className="container px-4 mx-auto flex flex-col items-center">
          <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Projects</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12 ">
            {
              projects.map((project) => {
                return (
                  <div key={project.desc} className="group filter shadow-2xl hover:shadow-1xl bg-indigo-50">
                    <figure>
                      <img className="object-cover" src={project.image} alt={project.title} />
                    </figure>
                    <div className="py-6 px-4  relative">
                      <h2 className="text-lg capitalize text-gray-700 font-normal my-2">{project.title}</h2>
                      <p className="text-gray-700 font-light text-sm">
                        {project.desc}
                      </p>
                      <span className="grid gap-2 grid-flow-col justify-start mt-4">
                        {
                          project.tags.map(tag => {
                            return (
                              <span key={tag} className="w-10 h-10 p-2 bg-indigo-50 rounded-full filter drop-shadow-md m-1"><img className="object-contain text-black" src={tag} alt={tag} /></span>
                            )
                          })
                        }
                      </span>
  
                      <a href={project.href} target="_blank" rel="noreferrer" className="transition duration-500 opacity-0 group-hover:opacity-100 px-8 py-2 w-11/12 -mt-10 absolute left-3 right-1 text-center bg-indigo-100 filter shadow border-2 border-indigo-100 hover:border-indigo-400 hover:text-indigo-600">View</a>
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