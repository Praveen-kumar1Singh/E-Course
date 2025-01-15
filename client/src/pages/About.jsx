// import React from 'react'

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-gray-800 min-h-screen py-10 px-6 mt-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>

          {/* Introduction Section */}
          <section className="mb-8">
            <p className="text-lg leading-7">
              Welcome to our platform! We are committed to providing free, high-quality IT education to learners worldwide.
              Our mission is to bridge the gap between ambitious learners and the ever-evolving tech industry through accessible
              resources, practical training, and expert mentorship.
            </p>
          </section>

          {/* Mission & Vision Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
            <p className="text-lg leading-7">
              To democratize IT education by making it accessible to everyone, empowering individuals with skills to excel
              in the digital era.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Our Vision</h2>
            <p className="text-lg leading-7">
              To create a global community of tech enthusiasts and professionals, fostering innovation, collaboration,
              and lifelong learning.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><span className="font-semibold">Free IT Courses:</span> Covering topics like coding, networking, and cybersecurity.</li>
              <li><span className="font-semibold">Hands-On Projects:</span> Practical learning through real-world applications.</li>
              <li><span className="font-semibold">Expert-Led Modules:</span> Industry professionals guiding you every step.</li>
              <li><span className="font-semibold">Flexible Learning:</span> Self-paced, interactive video tutorials and exercises.</li>
            </ul>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Join Us Today!</h2>
            <p className="text-lg leading-7 mb-6">
              Be part of a growing community of learners. Sign up for free and take the first step towards a tech-savvy future.
              Together, we can shape a better tomorrow through technology.
            </p>
            <a
              href="/signup"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About