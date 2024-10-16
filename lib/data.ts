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
      "Performed maintenance of IT tools to ensure smooth and efficient operations. Developed a web application to manage patient records, enhancing accessibility and organization. Collected and digitized information from old documents, inserting the data into a database to enable advanced filtering and generate graphical reports by month and year for specific insights.",
    icon: React.createElement(CgWorkAlt),
    date: "04/2023 - 10/2023",
  },
  // LuGraduationCap
  {
    title: "Developer Intern in ONEE",
    location: "Morroco, kenitra",
    description:
      "Developed a web application to manage inventory, starting with task analysis and requirement gathering. Selected suitable programming languages and created employee-facing interfaces. Designed the dashboard using front-end tools like HTML, CSS, JavaScript (jQuery, Ajax), and frameworks such as React, Tailwind, and Flowbite. Set up databases with MySQL, PHP, Express, and MongoDB. Configured the server to handle front-end requests. Additionally, handled troubleshooting and repairs of laptops, installed printers and software, and anticipated risks and budgets throughout the project.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2023 - 04/2023",
  },
  {
    title: "Specialized Technician in Development",
    location: "Ecole Miage kenitra, Morroco",
    description:
      "Gained hands-on experience at the center to earn a diploma as a developer, building on my prior programming background. Enhanced technical skills by working on diagnostics, formatting laptops, and installing software. This practical training, combined with coursework, provided a solid foundation in development. Successfully completed the program and received a valued certificate upon graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "07/2021 - 07/2023",
  },
  {
    title: "English Literature degree Bac +1",
    location: "kenitra, Morroco",
    description:
      "Completed the first year of English Literature studies at Université Ibn Tofail, focusing on various literary genres, themes, and critical theories. Gained skills in analysis, interpretation, and academic writing, enhancing my understanding of English language and literature.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 -2019",
  },
] as const;

export const projectsData = [
  {
    title: "Restaurant Operations App",
    description:
      "A customer reservation system for streamlined bookings. It provides instant confirmation and waitlist management.",
    tags: ["React", "vite", "node.js", "Express", "MongoDB","Prisma","API"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Landing pages",
    description:
      "I worked as a front-end developer on this startup project for 2 years. as a freelancer with clients form siveral projects.",
    tags: ["React", "Html5", "CSS", "Tailwind", "JavaScript","AOS",],
    imageUrl: corpcommentImg,
  },
  {
    title: "School Management Web Application",
    description:
      "A full-stack school management web app that simplifies managing students, teachers, and documents, with support for printing to streamline administrative tasks.",
    tags: ["front-end", "back-end", "Realtime", "API","Deploy"],
    imageUrl: rmtdevImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
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
  "Framer Motion",
] as const;