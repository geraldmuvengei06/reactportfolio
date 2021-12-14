import logo from './images/logo.png';
import heroimage from "./images/bg.png";
import mail from "./images/mail.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import fb from "./images/fb.png";
import insta from "./images/insta.png";
import twitter from './images/twitter.png';
// import itb from "./images/itb.png";
import design from "./images/design.png";
import develop from "./images/develop.png";
import maintain from "./images/maintain.png";
import divider from "./images/divider.png";

// icons
import html from './images/html.png';
import css from './images/css.png';
import sass from './images/sass.png';
import javascript from './images/javascript.png';
import vuejs from './images/vuejs.png';
import laravel from './images/laravel.png';
import mongo from './images/mongo.png';
import bootstrap from './images/bootstrap.png';
import git from './images/git.png';
import ubuntu from './images/ubuntu.png';
import nodejs from './images/nodejs.png';
import tailwind from './images/tailwind.png';
import react from './images/react.png';
import python from './images/python.png';

// project images
import project from './images/project.png';
import project1 from './images/project1.png';
import project2 from './images/project2.png';

import './App.css';
import { useEffect, useState } from 'react';
import Counter from './features/counter/Counter';
import Post from './components/Post';
// import { useDispatch, useSelector } from 'react-redux';
// import { authenticate } from './features/auth/authSlice';

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
      <About id="about" />

      <Divider />
      <Counter />

      <Skills id="skills" />
      {/* portfolio */}
      <Portfolio id="portfolio" />
      <Articles />
      {/* contact */}
      <Contact id="contact" />
      {/* footer */}
      <Footer />
    </main>


  );
}

function Navbar() {
  const [navclass, setNavclass] = useState('transparent')

  // const is_authenticated = useSelector(state => state.auth.is_authenticated)
  // const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(authenticate())
    window.addEventListener('scroll', () => {
      let bg = window.scrollY > 200 ? 'indigo-50 shadow-xl' : 'transparent'
      return setNavclass(bg)
    })
  }, [])

  return (
    <nav className={`bg-${navclass} filter fixed top-0 left-0 right-0 z-40 transition duration-500`}>
      <div className="container mx-auto py-4 px-4 flex justify-between flex-column">
        <div className="nav-logo flex-none">
          <img src={logo} className='w-40' alt="geraldmuvengei" />
        </div>
        <ul className="hidden sm:flex justify-around">
          <li className="m-2"><a href="#about" className="font-bold text-sm text-black hover:text-gray-200">About Me</a></li>
          <li className="m-2"><a href="#portfolio" className="font-bold text-sm text-black hover:text-gray-200">Portfolio</a></li>

          <li className="m-2 hover:mb-1 font-bold">
            <a href="#contact" className="py-4 px-6 rounded-full bg-black text-indigo-50">Contact Me ✉️</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
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
      

      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center my-12 md:my-24">
        <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
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
                  <a href={item.href} target="_blank" rel="noreferrer" className="w-16 h-16 p-4 bg-indigo-50 filter drop-shadow-xl m-2"><img className="object-contain text-black" src={item.icon} alt={item.name} /></a>
                )
              })
            }
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div class="w-full hidden sm:block lg:w-1/2 lg:py-6 text-center">
          <img className="object-fit" alt="geraldmuvengei" src={heroimage} />
        </div>
      </div>



    </section>
  )
}


function About() {
  let services = [
    {
      image: design,
      desc: "I'm a professional Frontend Developer. I a ton of experience in Vue.js, React.js Vanilla, Javascript. This is my main development stack. I like writing clean code. I believe that it takes good UI/UX to present one's ideas!",
      title: "Frontend Development"
    },
    {
      image: develop,
      desc: "In addition to writing code for the frontend, I'm also conversant with building Rest APIs with PHP Laravel and Nodejs (MERN)",
      title: "Fullstack Development"
    },
    {
      image: maintain,
      desc: "I have skills in server management. AWS, Heroku, Vesta CP, VPS, Dedicated servers and more. I'm familiar with Linux (Ubuntu). Devops, CI/CD comes in handly in my career path.",
      title: "Server Management & Maintenance"
    },
  ];

  return (

    <section id="about" className="about bg-white py-16">
      <div className="container px-4 md:px-40  mx-auto flex flex-col items-center" >
        <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">About Me</h2>
        <p className="text-left text-2xl w-2/3 mb-12">My name is Gerald, I'm a passionate, self taught Frontend Developer in Vue and React. I love building web based products! What drives me each time I get to my keyboard to write code?
        <br /> <br /> "Building Quality Solutions to Real Life Problems, with Quality Code ofcourse!"</p>
        
        {/* <span className="uppercase text-sm font-medium border-r-2 border-l-2 border-black px-4 py-2 text-black">Explore</span> */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-12 ">

          {
            services.map((service) => {
              return (
                <media className="flex py-2">
                  <figure className="w-12 flex-none -mr-4 -mt-2">
                    <img className="object-contain  relative" src={service.image} alt={service.title} />
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
      </div>
    </section>
  )


}

function Skills() {

  let skills = [
    {
      name: 'html',
      image: html
    },
    {
      name: 'css',
      image: css
    },
    {
      name: 'sass',
      image: sass
    },
    {
      name: 'javascript',
      image: javascript
    },
    {
      name: 'react',
      image: react
    },
    {
      name: 'vue',
      image: vuejs
    },

    {
      name: 'bootstrap',
      image: bootstrap
    },

    {
      name: 'git',
      image: git
    },
    {
      name: 'laravel',
      image: laravel
    },
    {
      name: 'python',
      image: python
    },
    {
      name: 'Ubuntu',
      image: ubuntu
    },
    {
      name: 'nodejs',
      image: nodejs
    },
    {
      name: 'mongodb',
      image: mongo
    },
    {
      name: 'Tailwind CSS',
      image: tailwind
    },
  ];


  return (
    <section className="about bg-white py-16">

      <div className="container px-4 md:px-40  mx-auto flex flex-col items-center" >
        <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Skills</h2>
      </div>
      <div className="mx-auto w-full overflow-hidden">
        <div className="flex mb-12 justify-betweem hozirontal-scroll">
          {
            skills.map((skill) => {
              return (
                <media className="text-center scroll-item py-4 px-16">
                  <figure className="justify-center flex">
                    <img className="h-16 object-contain relative filter  hover:grayscale" alt={skill.name} src={skill?.image} />
                  </figure>
                  <p className="uppercase font-light mt-4">{skill?.name}</p>
                </media>
              )
            })
          }
        </div>

      </div>


    </section >
  )
}

function Divider() {
  return (
    <section className="container px-4 md:px-56 mx-auto flex flex-col items-center py-12">
      <img className="w-28" src={divider} alt="divider" />
    </section>
  )
}

function Portfolio() {

  let projects = [
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
    <section id="portfolio" className="bg-gradient-to-b from-purple-400 to-pink-600  py-16">
      <div className="container px-4 md:px-40 mx-auto flex flex-col items-center">
        <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12 ">
          {
            projects.map((project) => {
              return (
                <div className="group filter shadow-2xl hover:shadow-1xl bg-indigo-50">
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
                            <span className="w-10 h-10 p-2 bg-indigo-50 rounded-full filter drop-shadow-md m-1"><img className="object-contain text-black" src={tag} alt={tag} /></span>
                          )
                        })
                      }
                    </span>

                    <a href={project.href} className="transition duration-500 opacity-0 group-hover:opacity-100 px-8 py-2 w-11/12 -mt-10 absolute left-3 right-1 text-center bg-indigo-100 filter shadow border-2 border-indigo-100 hover:border-indigo-400 hover:text-indigo-600">View</a>
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


function Articles() {
  let posts = [
    {
      title: "Cool Projects to Help You Learn React JS - Part 1 ",
      description: "Personally, when I want to learn a new Framework, I go through the documentation to grasp the basic and core 'Hows and Whys', then I start basic applications to practice the concepts I've learned. ",
      content: "Personally, when I want to learn a new Framework, I go through the documentation to grasp the basic and core 'Hows and Whys', then I start basic applications to practice the concepts I've learned. ",
      url: "https://dev.to/geraldmuvengei06/cool-projects-to-help-you-learn-react-js-part-1-g19",
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--IGeEcJLg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2u4eu1hfv2skbun3tjcm.jpg",
      publishedAt: "Oct 6th 2021",
      source: {
        name: "Dev.to",
        url: "https://dev.to"
      },
    },
    {
      title: "Cool Projects to Help You Learn React Js - Part 2 ",
      description: "Hello there 👋, citizens of the web!",
      content: "A couple of days ago I decided to write a series of articles on Cool Projects to Help You Learn React Js. I remember when I started learning react, I went through the documentation, then I had to come up with interesting projects to help me grasp the concepts. I needed an API that I'd consume. However I didn't have the time to start building one. I went through the web and found interesting APIs that are publicly available for anyone to use. This saved me much time to work on other projects. ",
      url: "https://dev.to/geraldmuvengei06/cool-projects-to-help-you-learn-react-js-part-2-1f7a",
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--IGeEcJLg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2u4eu1hfv2skbun3tjcm.jpg",
      publishedAt: "Oct 7th 2021",
      source: {
        name: "Dev.to",
        url: "https://dev.to"
      },
    },
    {
      title: "How to Use Environment Variables (env) in ExpressJs ",
      description: "Well, hello!",
      content: "If you're coming from frontend development with Vue, or React, you know that environment variables (.env) are initialized behind the scenes i.e. You don't have to require and use dotenv. However, when writing backend with, Expressjs, for instance, you have to initialize it like so:-",
      url: "https://dev.to/geraldmuvengei06/how-use-environment-variables-env-in-expressjs-3bpc",
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--X0LnYJuK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8b077ke42bfe3629t2ah.jpg",
      publishedAt: "Oct 21st 2021",
      source: {
        name: "Dev.to",
        url: "https://dev.to"
      },
    }
  ]
  return (
    <section id="portfolio" className="py-16">
      <div className="container px-4 md:px-40 mx-auto flex flex-col items-center">
        <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Articles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12 ">

        {
          posts.map((post) => {
            return <Post {...post}/>
          })
        }
        </div>

      </div>
    </section>
  )
}


function Contact() {
  return (
    <section id='contact' className="about bg-white py-16">
      <div className="container sm:px-4 md:px-40  mx-auto flex flex-col items-center">
        <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Contact Me</h2>
        <p className="text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur. Eligendi dolore numquam necessitatibus fuga eveniet minima vero quae</p>
        <Divider />

        <form className="w-10/12 sm:w-2/3 my-4">
          <input className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400" type="name" placeholder="enter your name" />
          <input className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400" type="email" placeholder="enter your email" />

          <input className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400" type="tel" placeholder="enter your phone number" />

          <textarea rows="5" placeholder="Message goes here.." className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400">

          </textarea>
        </form>

        <button className="uppercase text-sm font-medium border-r-4 border-l-4 filter transition duration-500 hover:shadow hover:border-indigo-400 hover:text-indigo-400  border-black px-4 py-2 text-black">Submit</button>

      </div>
    </section>
  )
}

function Footer() {
  let social = [
    {
      icon: fb,
      link: "https://www.facebook.com/geraldmuvengei254"
    },
    {
      icon: insta,
      link: "https://www.instagram.com/slim_gerald/"
    },
    {
      icon: twitter,
      link: "https://twitter.com/geraldmuvengei2"
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
                <a href={item.link} target="_blank" rel="noreferrer" className="w-10 p-2filter drop-shadow-md m-2"><img className="object-contain text-black" src={item.icon} alt={item.icon} /></a>
              )
            })
          }
        </div>
        <p className="text-indigo-50">@2021 <strong className="font-bold">Gerald Muvengei</strong> All Rights Reserved.</p>
      </div>
    </footer>
  )
}
export default App;
