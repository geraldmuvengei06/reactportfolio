import logo from './images/logo.png';
import heroimage from "./images/bg.png";
import mail from "./images/mail.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import itb from "./images/ITB.png";
import design from "./images/design.png";
import develop from "./images/develop.png";
import maintain from "./images/maintain.png";
import divider from "./images/divider.png";

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (

    <main>
      {/* navbar */}
      <Navbar className="z-40" />
      {/* hero */}
      <Hero />
      {/* intro */}
      {/* <Intro /> */}
      {/* about & skills*/}
      <About />
      {/* portfolio */}
      <Portfolio />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </main>


  );
}

function Navbar() {
  const [navclass, setNavclass] = useState('transparent')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let bg = window.scrollY > 200 ? 'black' : 'transparent'
      return setNavclass(bg)
    })
  }, [])

  return (
    <nav className={`bg-${navclass} fixed top-0 left-0 right-0 z-40 transition duration-500`}>
      <div className="container mx-auto py-4 px-4 flex justify-between flex-column">
        <div className="nav-logo flex-none">
          <img src={logo} alt="geraldmuvengei" />
        </div>
        <ul className="hidden sm:flex justify-around">
          <li className="m-2"><a href="#" className="font-bold text-sm text-blue-50 hover:text-gray-200">About Me</a></li>
          <li className="m-2"><a href="#" className="font-bold text-sm text-blue-50 hover:text-gray-200">Skills</a></li>
          <li className="m-2"><a href="#" className="font-bold text-sm text-blue-50 hover:text-gray-200">Portfolio</a></li>
          <li className="m-2 hover:mb-1 font-bold">
            <a className="py-4 px-6 rounded-full bg-blue-50 text-black">Contact Me 🤙🏾</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="flex z-0 hero bg-blue-50 min-h-full">
      <div className="flex-grow">
        <div className="container pt-56 md:pt-32 px-12 px-sm-24 mx-auto  grid items-center content-center h-full">
          <h1 className=" mb-8">
            <span className="text-4xl">Hi, I am</span> <br />
            <span className="text-7xl font-bold is-title text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Tomasz Gajda</span> <br />
            <span className="text-base text-gray-500 font-bold">A Front-end Developer / UI Designer</span> <br />
          </h1>

          <div className="mb-8 flex">
            <a className="w-10 p-2 bg-indigo-50 filter drop-shadow-xl m-2"><img className="object-contain text-black" src={mail} /></a>
            <a className="w-10 p-2 bg-indigo-50 filter drop-shadow-xl m-2"><img className="object-contain text-black" src={github} /></a>
            <a className="w-10 p-2 bg-indigo-50 filter drop-shadow-xl m-2"><img className="object-contain text-black" src={linkedin} /></a>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-grow bg-black h-auto pt-12 sm:none">
        <div className="container mx-auto pt-6 px-6">
          <img className="object-contain " src={heroimage} />
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro bg-gray-900 flex">
      <div className="py-12 px-4 md:px-16 container mx-auto flex-grow">
        <h2 className="font-bold text-white uppercase mb-4 text-2xl">Building Solutions to Real Life Problems</h2>
        <p className="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae, ducimus perferendis facilis consequuntur, molestiae, ea veritatis! Neque error praesentium quia?
        </p>
        <a className="uppercase font-medium border-r-2 border-l-2  px-4 py-2 text-white text-sm">read more</a>
      </div>
      <div className="flex-1">
        <img className=" object-contain" src={itb} />
      </div>
    </section>
  )
}


function About() {

  let skills = [
    {
      name: 'html',
      image: '/images/html.png'
    },
    {
      name: 'css',
      image: '/images/css.png'
    },
    {
      name: 'sass',
      image: '/images/sass.png'
    },
    {
      name: 'javascript',
      image: '/images/javascript.png'
    },
    {
      name: 'react',
      image: '/images/react.png'
    },
    {
      name: 'vue',
      image: '/images/vuejs.png'
    },

    {
      name: 'bootstrap',
      image: '/images/bootstrap.png'
    },

    {
      name: 'git',
      image: '/images/git.png'
    },
    {
      name: 'laravel',
      image: '/images/laravel.png'
    },
    {
      name: 'python',
      image: '/images/python.png'
    },
    {
      name: 'Ubuntu',
      image: '/images/ubuntu.png'
    },
  ];
  let learning = [
    {
      name: 'nodejs',
      image: '/images/nodejs.png'
    },
    {
      name: 'mongodb',
      image: '/images/mongo.png'
    },
    {
      name: 'Tailwind CSS',
      image: '/images/tailwind.png'
    },

  ];

  let services = [
    {
      image: design,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae",
      title: "Frontend Development"
    },
    {
      image: develop,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae",
      title: "Fullstack Development"
    },
    {
      image: maintain,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae",
      title: "Server Management & Maintenance"
    },
  ];
  return (
    <section className="about bg-white py-16">
      <div className="container px-4 md:px-40  mx-auto flex flex-col items-center">
        <h1 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">About Me</h1>
        <p className="text-center w-2/3 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae</p>
        <a className="uppercase text-sm font-medium border-r-2 border-l-2 border-black px-4 py-2 text-black">Explore</a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-12 ">

          {
            services.map((service) => {
              return (
                <media className="flex py-2">
                  <figure className="w-12 flex-none -mr-4 -mt-2">
                    <img className="object-contain  relative" src={service.image} />
                  </figure>
                  <div className="media-content flex-grow ">
                    <h2 className="text-lg uppercase text-black font-bold mb-3">{service.title}</h2>
                    <p>{service.desc}</p>
                  </div>
                </media>
              )
            })
          }




        </div>


        <Divider />

        <h1 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Skills</h1>

        <h2 className="font-bold uppercase mt-12 mb-4 text-left" >Using Now:</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-24 gap-y-12 mb-12">
          {
            skills.map((skill) => {
              return (
                <media className="text-center">
                  <figure className="justify-center flex">
                    <img className="h-16 object-contain relative filter  hover:grayscale" src={skill?.image} />
                  </figure>
                  <p className="uppercase font-light mt-4">{skill?.name}</p>
                </media>
              )
            })
          }
        </div>

        <h2 className="font-bold uppercase mb-4 mt-12 text-black">Learning:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-24 gap-y-12 mb-12">
          {
            learning.map((skill) => {
              return (
                <media className="text-center">
                  <figure className="justify-center flex">
                    <img className="h-16 object-contain relative  filter  hover:grayscale" src={skill?.image} />
                  </figure>
                  <p className="uppercase font-light mt-4">{skill?.name}</p>
                </media>
              )
            })
          }
        </div>



      </div>

    </section>
  )
}

function Divider() {
  return (
    <section className="container px-4 md:px-56 mx-auto flex flex-col items-center py-12">
      <img className="w-28" src={divider} />
    </section>
  )
}

function Portfolio() {

  let projects = [
    {
      image: "/images/project.png",
      title: "Frontend Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur.",
      tags: ['./images/tailwind.png', './images/react.png', './images/javascript.png']
    },
    {
      image: "/images/project1.png",
      title: "Project Two",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur.",
      tags: ['./images/vuejs.png', './images/html.png', './images/css.png']
    },
    {
      image: "/images/Project2.png",
      title: "Fullstack Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur.",
      tags: ['./images/laravel.png', './images/vuejs.png', './images/javascript.png']
    },
  ]

  return (
    <section className="bg-gradient-to-b from-purple-400 to-pink-600  py-16">
      <div className="container px-4 md:px-20  mx-auto flex flex-col items-center">
        <h1 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12 ">
          {
            projects.map((project) => {
              return (
                <div className="group filter shadow-2xl hover:shadow-1xl bg-indigo-50">
                  <figure>
                    <img className="object-cover" src={project.image} />
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
                            <a className="w-10 h-10 p-2 bg-indigo-50 rounded-full filter drop-shadow-md m-1"><img className="object-contain text-black" src={tag} /></a>
                          )
                        })
                      }
                    </span>

                    <a className="transition duration-500 opacity-0 group-hover:opacity-100 px-8 py-2 w-11/12 -mt-10 absolute left-3 right-1 text-center bg-indigo-100 filter shadow border-2 border-indigo-100 hover:border-indigo-400 hover:text-indigo-600">View</a>
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


function Contact() {
  return (
    <section className="about bg-white py-16">
      <div className="container px-4 md:px-40  mx-auto flex flex-col items-center">
        <h1 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Contact Me</h1>
        <p className="text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae</p>
        <Divider />

        <form className="w-2/3 my-4">
          <input className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4" type="name" placeholder="enter your name" />
          <input className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4" type="email" placeholder="enter your email" />

          <input className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4" type="tel" placeholder="enter your phone number" />

          <textarea cols="5" placeholder="Message goes here.." className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4">

          </textarea>
        </form>

        <a className="uppercase text-sm font-medium border-r-4 border-l-4 filter transition duration-500 hover:shadow hover:border-indigo-400 hover:text-indigo-400  border-black px-4 py-2 text-black">Submit</a>

      </div>
    </section>
  )
}

function Footer() {
  let social = [
    {
      icon: './images/fb.png',
      link: ""
    },
    {
      icon: './images/insta.svg',
      link: ""
    },
    {
      icon: './images/mail.svg',
      link: ""
    },
    {
      icon: './images/linkedin.svg',
      link: ""
    },

  ]
  return (
    <footer className="intro bg-black flex py-4">
      <div className="container px-4 md:px-40 py-12  mx-auto flex flex-col items-center">
        <div className="w-2/3"></div>
        <p className="text-indigo-50">Back to top</p>
        <div className="flex py-5">
          {
            social.map(item => {
              return (
                <a href={item.link} target="_blank" className="w-10 p-2filter drop-shadow-md m-2"><img className="object-contain text-black" src={item.icon} /></a>
              )
            })
          }
        </div>
        <p className="text-indigo-50">@2021 <strong className="font-bold">Tomasz Gajda</strong> All Rights Reserved.</p>
      </div>
    </footer>
  )
}
export default App;
