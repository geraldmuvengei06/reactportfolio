import React from "react"
import Post from './Post';


export default function Articles() {
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
            <div className="container px-4 mx-auto flex flex-col items-center">
                <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Articles</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-12 ">

                    {
                        posts.map((post) => {
                            return <Post key={post.title} {...post} />
                        })
                    }
                </div>

            </div>
        </section>
    )
}