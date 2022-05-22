import React from "react"
import divider from "../images/divider.png";

export default function Divider() {
    return (
      <section className="container px-4 md:px-56 mx-auto flex flex-col items-center py-12">
        <img className="w-28" src={divider} alt="divider" />
      </section>
    )
  }