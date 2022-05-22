import React, { useState } from "react";
import Alert from "./Alert";
import Divider from "./Divider";
import Loading from "./Loading";

export default function Contact() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState({
        type: '',
        color: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = {
            name,
            email,
            tel,
            message,
        }

        sendMessage(data)
            .then(res => {
                if (Number(res.status) !== 200) {
                    // error
                    // console.log("error", res);
                    setRes({
                        type: 'Error',
                        color: 'pink',
                        message: res.statusText || 'Could not send message, please try later.'
                    })
                } else {
                    // success
                    // console.log("success", res);
                    setRes({
                        type: 'Success',
                        color: 'green',
                        message: res.statusText || 'Message send successifully.'
                    })
                }
            })
            .finally(() => {
                setLoading(false)

                setTimeout(() => {
                    setRes({
                        type: '',
                        color: '',
                        message: ''
                    })
                }, 5000);

            })
    }

    function sendMessage(data) {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_SENDGRID_FUNCTIONS_URL}/mail`, {
                method: "POST",
                // headers,
                body: JSON.stringify(data),
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    return (
        <section id='contact' className="about bg-white py-16 ">
            <div className="container sm:px-4 md:px-40  mx-auto flex flex-col items-center">
                <h2 className="text-1xl mb-6 uppercase font-bold text-black border-black border-4 py-4 px-6 w-72 text-center">Contact Me</h2>
                <p className="text-center w-2/3">React to me, discuss your idea, I'll turn it into a fantastic web app!</p>
                <Divider />

                <form className="w-10/12 sm:w-2/3 my-4" onSubmit={(e) => handleSubmit(e)}>

                    {!!res.type && res.color && res.message
                        && <Alert type={res.type} color={res.color} message={res.message}></Alert>
                    }

                    <input required onInput={(e) => setName(e.target.value)} className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400" type="text" placeholder="enter your name" />
                    <input required onInput={(e) => setEmail(e.target.value)} className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400" type="email" placeholder="enter your email" />

                    <input onInput={(e) => setTel(e.target.value)} className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400" type="tel" placeholder="enter your phone number" />

                    <textarea required onInput={(e) => setMessage(e.target.value)} rows="5" placeholder="Message goes here.." className="border-b-4 border-l-4 border-black px-4 text-sm py-3 w-full uppercase my-4 focus:border-indigo-400 focus:text-indigo-400">

                    </textarea>


                    <div className="text-center">
                        <button type="submit" className=" uppercase text-sm font-medium border-r-4 mb-16 border-l-4 filter transition duration-500 hover:shadow hover:border-indigo-400 hover:text-indigo-400  border-black px-4 py-2 text-black">
                            {
                                loading ? <Loading></Loading> : <span>Submit</span>
                            }
                        </button>
                    </div>


                </form>


                <blockquote className="twitter-tweet mt-12 w-10/12 sm:w-2/3"><p lang="en" dir="ltr">Hi <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a>, after learning <a href="https://twitter.com/react?ref_src=twsrc%5Etfw">@react</a> js, I&#39;ve offered my service on <a href="https://twitter.com/fiverr?ref_src=twsrc%5Etfw">@fiverr</a> as a react js developer. Made some sales and Fiverr promoted me to a Level One seller! check out my Gigs <a href="https://t.co/dtdIhwACrG">https://t.co/dtdIhwACrG</a></p>&mdash; g (@geraldmuvengei2) <a href="https://twitter.com/geraldmuvengei2/status/1471087183348088837?ref_src=twsrc%5Etfw">December 15, 2021</a></blockquote>
            </div>
        </section>
    )
}