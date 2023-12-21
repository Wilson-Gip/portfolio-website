"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                        Hello, I'm {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        "Wilson Gip",
                        1000,
                        "Producer",
                        1000,
                        "Game Developer",
                        1000,
                        "Web Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-2">
                    My name is Wilson Gip, and I am currently studying Informatics/Computer Science @ UCI. In my free time, I like to play video games, watch anime/shows, eat food, workout and hang out with friends!
                </p>
                <div>
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
                    >
                        Contact
                     </Link>
                    <Link
                        href="/"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                    >
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Resume/CV
                    </span>
            </Link>
                </div>
            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/hero-image3.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={800}
                    height={800}
                    />
                </div>
                </motion.div>
            </div>
    </section>
  )
}

export default HeroSection