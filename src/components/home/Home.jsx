import React from "react"
import { About } from "../pages/About"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"
import { Blog } from "../pages/Blog"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
            <Blog />

    </>
  )
}
