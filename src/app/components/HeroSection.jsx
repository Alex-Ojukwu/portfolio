"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Star, Code2, Calendar } from "lucide-react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const video = videoRef.current;
      if (!video) return;
      if (mq.matches) video.pause();
      else video.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Bottom blur overlay — backdrop blur masked to fade out toward mid-screen */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none backdrop-blur-xl"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 45%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-12 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end gap-8">
          <div className="flex-1">
            <div
              className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm text-white animate-blur-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <span className="flex items-center gap-2">
                <Star size={16} className="fill-white sm:w-5 sm:h-5" />
                <span className="font-medium">7+ Projects Shipped</span>
              </span>
              <span className="flex items-center gap-2">
                <Code2 size={16} className="sm:w-5 sm:h-5" />
                <span>Full-Stack · AI/ML</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="sm:w-5 sm:h-5" />
                <span>Open to Opportunities</span>
              </span>
            </div>

            <h1
              className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] mb-4 md:mb-6 [text-wrap:balance] animate-blur-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              Alex-Ojukwu Nduka.
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-12 max-w-2xl animate-blur-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              Full-stack developer crafting fast, beautiful digital
              experiences, from responsive web apps to AI-powered products.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/#projects"
                className="flex items-center gap-2 bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-gray-200 transition-colors animate-blur-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                <Play size={18} className="fill-black" />
                <span>View Projects</span>
              </Link>
              <Link
                href="/#contact"
                className="liquid-glass rounded-full font-medium text-white px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white/10 transition-colors animate-blur-fade-up"
                style={{ animationDelay: "700ms" }}
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 md:justify-end">
            <a
              href="https://github.com/Alex-Ojukwu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm text-white hover:bg-white/10 transition-colors animate-blur-fade-up"
              style={{ animationDelay: "800ms" }}
            >
              <Image src={GithubIcon} alt="" width={18} height={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-ojukwu-a17852365/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm text-white hover:bg-white/10 transition-colors animate-blur-fade-up"
              style={{ animationDelay: "900ms" }}
            >
              <Image src={LinkedinIcon} alt="" width={18} height={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
