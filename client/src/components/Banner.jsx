// import React from 'react'

import { Button } from "./ui/button"
import { Input } from "./ui/input"

function Banner() {
  return (
    <>
      <div className=" md:flex  p-4 mt-16  md:ml-10">
        <div className="order-2 w-full md:w-1/2 md:mr-9">
          <img src="src\assets\banner2pic.svg" alt="banner pic" />
        </div>
        <div className="md:w-1/2 order-2 md:order-1 space-y-5 md:space-y-4 md:mt-20 mt-5">
          <h1 className=" md:text-4xl font-bold">Hello,welcome here to learn <br className="hidden md:block" />something <span className="text-pink-600">new everyday!!!</span></h1>
          <p className="md:text-xl">This course dives into core concepts like programming, data, AI, and cybersecurity. Designed for hands-on learning, it equips you with real-world skills to excel in tech. Let’s innovate,build and shape the digital future together!</p>
          <div className="space-y-4 md:space-y-3">
            <Input type="email" placeholder="Enter your email to login" className="w-2/3" />
            <Button className="bg-pink-600" >Send Email</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Banner