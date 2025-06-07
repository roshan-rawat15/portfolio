import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecofogeImg from "@/public/ecofogeImg.jpg";
import codeEditorImg from "@/public/codeEditorImg.jpg";
import zerodhaImg from "@/public/zerodhaImg.jpg";
import hotelImg from "@/public/hotelImg.png";
import uberImg from "@/public/uberImg.png";


export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Education", hash: "#education" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const education = [
  {
    title: "Greater Noida Institute of Technology",
    location: "Greater Noida, Uttar Pradesh, India",
    description:
      "Pursuing Bachelor of Computer Applications (BCA) with a focus on Web Development and Software Engineering",
    remarks: "Current CGPA: 6.5*",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present*",
  },
  {
    title: "DVC +2 High School, Bokaro Thermal",
    location: "Bokaro Thermal, Jharkhand, India",
    description: "Completed Intermediate in Computer Science (Non Medical)",
    remarks: "Percentage: 67%",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "DVC +2 High School, Bokaro Thermal",
    location: "Bokaro Thermal, Jharkhand, India",
    description: "Completed Matriculation",
    remarks: "Percentage: 72%",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Ecofoge Waste Management",
    description:
      "I developed this final year BCA project to help manage and track waste collection. It includes features for user login, waste reports, and location tracking.",
    tags: ["Next.js", "Tailwind CSS", "Drizzle ORM", "TypeScript", "Clerk", "Leaflet", "Web3Auth"],
    imageUrl: ecofogeImg,
  },
  {
    title: "Collaborative Code Editor",
    description:
      "A real-time collaborative code editor built with a high-quality UI. Users can write, run, and share code across rooms with live updates and user tracking.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Socket.io", "Convex", "Clerk"],
    imageUrl: codeEditorImg,
  },
  {
    title: "Zerodha UI Clone",
    description:
      "A frontend clone of the Zerodha trading platform with a clean design and smooth UI/UX animations, built for practice and UI improvement.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    imageUrl: zerodhaImg,
  },
  {
  title: "Uber Full-Stack Clone",
  description:
    "A full-stack Uber clone with real-time ride booking and tracking, built using the MERN stack for a seamless experience.",
  tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  imageUrl: uberImg,
},
  {
  title: "Hotel Booking Website",
  description:
    "A modern hotel booking platform with seamless UI/UX, built to enhance user experience and streamline reservations.",
  tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  imageUrl: hotelImg,
},
] as const;

export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git",
  "Tailwind", "MongoDB", "Redux", "Express", "PostgreSQL", "Java", "Convex", "Appwrite",
] as const;
