"use client";
import React, { useTransition, useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import TabButton from "./TabButton";

const EASING = [0.25, 0.1, 0.25, 1];

const ABOUT_TEXT =
  "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience with JavaScript, React, Next.js, Node.js, Express, PostgreSQL, HTML, SCSS, and Git. I'm a quick learner always looking to expand my knowledge, especially in AI/ML, and I love collaborating with others to build amazing things.";

const FadeIn = ({ children, delay = 0, y = 30, className = "" }) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration: 0.7, delay, ease: EASING }}
    >
      {children}
    </motion.div>
  );
};

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
};

/* Character-by-character scroll reveal: each character has a dim placeholder
   holding layout, with an animated copy on top fading in as the paragraph
   moves through the viewport. */
const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  if (reduceMotion) {
    return <p className={className}>{text}</p>;
  }

  const words = text.split(" ");
  const total = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <React.Fragment key={wi}>
            <span className="inline-block" aria-hidden="true">
              {word.split("").map((ch, ci) => {
                const i = start + ci;
                return (
                  <Char
                    key={ci}
                    char={ch}
                    progress={scrollYProgress}
                    range={[i / total, Math.min((i + 1) / total, 1)]}
                  />
                );
              })}
            </span>
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </p>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-2 mt-2">
        {["Node.js", "Express", "PostgreSQL", "TypeScript", "React", "Next.js"].map((s) => (
          <li key={s} className="flex items-center gap-2 text-gray-300 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
            {s}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-3 mt-2">
        {[
          { school: "Pan-Atlantic University", detail: "Current" },
          { school: "The Ambassadors College", detail: "Secondary School" },
        ].map((e) => (
          <li key={e.school} className="flex flex-col">
            <span className="font-semibold text-white text-sm">{e.school}</span>
            <span className="text-gray-500 text-xs">{e.detail}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-2 mt-2">
        {[
          "WASSCE — 2022",
          "IGCSE (Cambridge / Pearson Edexcel) — 2022",
          "AWS Cloud Practitioner",
          "Google Professional Cloud Developer",
        ].map((c) => (
          <li key={c} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0 mt-1.5" />
            {c}
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(2.5rem, 8vw, 104px)" }}
        >
          About Me
        </h2>
      </FadeIn>

      <AnimatedText
        text={ABOUT_TEXT}
        className="mt-10 sm:mt-14 md:mt-16 text-center font-medium leading-relaxed max-w-[560px] text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)]"
      />

      <FadeIn delay={0.1} className="mt-12 sm:mt-16 w-full max-w-md">
        <div className="flex flex-row justify-center gap-1 border-b border-white/10 pb-1">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
            Skills
          </TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
            Education
          </TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
            Certifications
          </TabButton>
        </div>
        <div className="mt-6 min-h-[140px]">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 sm:mt-16 md:mt-20">
        <Link
          href="/#contact"
          className="inline-block bg-white text-black rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm px-8 py-3 sm:px-10 sm:py-3.5 hover:bg-gray-200 transition-colors"
        >
          Contact Me
        </Link>
      </FadeIn>
    </section>
  );
};

export default AboutSection;
