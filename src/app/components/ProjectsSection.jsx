"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Personal portfolio built with React and modern UI patterns.",
    image: "/images/projects/portfolio.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alex-Ojukwu/portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "A clean, visual-first portfolio for photography work.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Doctor's Booking Application",
    description: "Full-stack appointment scheduling system for clinics.",
    image: "/images/projects/Doctor_Appointment.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alex-Ojukwu/Doctor-Appointment",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Flower",
    description: "3D flower graphics design created using Blender.",
    image: "/images/projects/flower.png",
    tag: ["All", "Blender"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "CafeRoute",
    description: "A food delivery management system for ordering and tracking meals.",
    image: "/images/projects/cafe_route.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alex-Ojukwu/CAFE_ROUTE",
    previewUrl: "https://cafe-route.vercel.app/login",
  },
  {
    id: 7,
    title: "Biometrics Registration",
    description: "Cafeteria system using fingerprint biometric authentication.",
    image: "/images/projects/staff_registration.jpeg",
    tag: ["All", "JAVA"],
    gitUrl: "https://github.com/Alex-Ojukwu/JAVA-NETBEANS.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Xylo AI",
    description: "AI interview assistant with emotion detection and avatar live video feed.",
    image: "/images/projects/new_homepage.jpeg",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/Alex-Ojukwu/AI-INTERVIEWER",
    previewUrl: "https://ai-interviewer-fawn-nine.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          My Projects
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-2 mb-8">
        {["All", "Web", "JAVA", "AI", "Blender"].map((t) => (
          <ProjectTag
            key={t}
            onClick={setTag}
            name={t}
            isSelected={tag === t}
          />
        ))}
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id + "-" + index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.35, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
