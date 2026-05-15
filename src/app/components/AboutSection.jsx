"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-2 mt-2">
        {["Node.js", "Express", "PostgreSQL", "TypeScript", "React", "Next.js"].map((s) => (
          <li key={s} className="flex items-center gap-2 text-slate-700 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
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
            <span className="font-semibold text-slate-800 text-sm">{e.school}</span>
            <span className="text-slate-500 text-xs">{e.detail}</span>
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
          <li key={c} className="flex items-start gap-2 text-slate-700 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
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
    <section className="py-16 sm:py-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 -z-10" />
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-md"
            alt="About"
          />
        </div>
        <div className="flex flex-col h-full">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience with
            JavaScript, React, Next.js, Node.js, Express, PostgreSQL, HTML,
            SCSS, and Git. I&apos;m a quick learner always looking to expand my
            knowledge — especially in AI/ML — and I love collaborating with
            others to build amazing things.
          </p>
          <div className="flex flex-row gap-1 mt-8 border-b border-slate-200 pb-1">
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
          <div className="mt-6 min-h-[120px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
