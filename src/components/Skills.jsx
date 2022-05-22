import React from "react";
import html from '../images/html.png';
import css from '../images/css.png';
import sass from '../images/sass.png';
import javascript from '../images/javascript.png';
import vuejs from '../images/vuejs.png';
import laravel from '../images/laravel.png';
import mongo from '../images/mongo.png';
import bootstrap from '../images/bootstrap.png';
import git from '../images/git.png';
import ubuntu from '../images/ubuntu.png';
import nodejs from '../images/nodejs.png';
import tailwind from '../images/tailwind.png';
import react from '../images/react.png';
import python from '../images/python.png';

export default function Skills() {

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
                  <div key={skill.name} className="text-center scroll-item py-4 px-16">
                    <figure className="justify-center flex">
                      <img className="h-16 object-contain relative filter  hover:grayscale" alt={skill.name} src={skill?.image} />
                    </figure>
                    <p className="uppercase font-light mt-4">{skill?.name}</p>
                  </div>
                )
              })
            }
          </div>
  
        </div>
  
  
      </section >
    )
  }
  