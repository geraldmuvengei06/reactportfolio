import React from "react";

import fb from "../images/fb.png";
import insta from "../images/insta.png";
import twitter from '../images/twitter.png';


export default function Footer() {
    let social = [
      {
        icon: fb,
        link: "https://www.facebook.com/geraldmuvengei254"
      },
      {
        icon: insta,
        link: "https://www.instagram.com/geraldmuvengei254/"
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
                  <a href={item.link} key={item.link} target="_blank" rel="noreferrer" className="w-10 p-2filter drop-shadow-md m-2"><img className="object-contain text-black" src={item.icon} alt={item.icon} /></a>
                )
              })
            }
          </div>
          <p className="text-indigo-50">@2021 <strong className="font-bold">Gerald Muvengei</strong> All Rights Reserved.</p>
        </div>
      </footer>
    )
  }