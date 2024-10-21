import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Developer Intern in CNMH",
    location: "Morroco, kenitra",
    description:
      "Maintained IT tools, developed a patient records web application, and digitized old documents for database input, enabling advanced filtering and graphical reports",
    icon: React.createElement(CgWorkAlt),
    date: "04/2023 - 10/2023",
  },
  // LuGraduationCap
  {
    title: "Developer Intern in ONEE",
    location: "Morroco, kenitra",
    description:
      "Developed an inventory management web application, focusing on task analysis and user interfaces. ",
    icon: React.createElement(CgWorkAlt),
    date: "03/2023 - 04/2023",
  },
  {
    title: "Specialized Technician in Development",
    location: "Ecole Miage kenitra, Morroco",
    description:
      "Gained hands-on experience as a developer, building on my programming background. Enhanced technical skills through diagnostics and troubleshooting.",
    icon: React.createElement(LuGraduationCap),
    date: "07/2021 - 07/2023",
  },

] as const;

export const projectsData = [
  {
    title: "Restaurant Operations App",
    description:
      "A customer reservation system for streamlined bookings. It provides instant confirmation and waitlist management.",
    tags: ["React", "vite", "node.js", "Express", "MongoDB", "Prisma", "API"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Landing pages",
    description:
      "I worked as a front-end developer on this startup project for 2 years, freelancing with clients from several other projects.",
    tags: ["React", "Html5", "CSS", "Tailwind", "JavaScript", "AOS",],
    imageUrl: corpcommentImg,
  },
  {
    title: "School Management Web Application",
    description:
      "A full-stack school management web app that simplifies managing students, teachers, and documents, with support for printing to streamline administrative tasks.",
    tags: ["front-end", "back-end", "Realtime", "API", "Deploy"],
    imageUrl: rmtdevImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "SqlServer",
  "React",
  "Node.js",
  "PHP",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "MySql",
  "Express",
  "Query",
  "Deploy",
  "Vite",
  "Troubleshooting",
] as const;