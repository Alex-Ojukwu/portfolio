"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <p className="text-indigo-600 font-semibold text-sm sm:text-base uppercase tracking-widest mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="text-slate-900 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Alex-Ojukwu
            </span>
            <br />
            <span className="text-slate-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1200,
                  "AI/ML Engineer",
                  1200,
                  "Full Stack Dev",
                  1200,
                  "Problem Solver",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg">
            The engineer you need to bring your vision to life. Building fast,
            beautiful, and impactful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-8 py-3 rounded-full border-2 border-indigo-200 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200 to-violet-200 blur-2xl opacity-60 scale-110" />
            <div className="relative rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] mx-auto ring-4 ring-white shadow-xl overflow-hidden">
              <Image
                src="/images/ME.jpg"
                alt="Alex-Ojukwu"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
