"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "",
    image: "/images/projects/portfolio.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alex-Ojukwu/nextjs-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "Doctor's Booking Application",
    description: "",
    image: "/images/projects/Doctor_Appointment.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alex-Ojukwu/Doctor-Appointment",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Flower",
    description: "Flower Graphics Design using Blender",
    image: "/images/projects/flower.png",
    tag: ["All", "Blender"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
    {
    id: 7,
    title: "Biometrics Registration",
    description: "Cafeteria System that uses fingerprint biometric authentication",
    image: "/images/projects/staff_registration.jpeg",
    tag: ["All", "JAVA"],
    gitUrl: "https://github.com/Alex-Ojukwu/JAVA-NETBEANS.git",
    previewUrl: "/",
  },
   {
    id: 7,
    title: "TalentLens AI",
    description: "AI Interview Assistant with Emotion Detection and an Avatar with Live video Feed",
    image: "/images/projects/AI_interview_Assistant.jpeg",
    tag: ["All", "AI"],
    gitUrl: "",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="OS"
          isSelected={tag === "OS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JAVA"
          isSelected={tag === "JAVA"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Blender"
          isSelected={tag === "Blender"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
