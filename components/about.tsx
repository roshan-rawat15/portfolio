"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m <span className="font-italic font-bold text-2xl ">Roshan Kumar Rawat</span>, a <span className="italic font-semibold">passionate and self-motivated</span> Full Stack Developer with a strong foundation in the <span className="font-bold"> [MERN stack]</span> and a deep interest in creating <span className="">modern, responsive, and visually appealing</span> web applications. As a final-year BCA student, I’ve worked on multiple frontend and full-stack projects, combining my skills in <span className="font-bold text-lg">(React)</span>, <span className="font-bold text-lg">Tailwind CSS</span>, <span className="font-bold text-lg">GSAP</span>, and <span className="font-bold text-lg">(Next.js)</span> to bring creative ideas to life.
      </p>

      <p className="mb-3">
        I have a <span className="font-semibold">solid understanding</span> of core programming languages like <span className="font-bold">(JavaScript)</span> and <span className="font-bold">(Java)</span>, which helps me build <span className="">efficient, scalable, and user-friendly</span> applications. I’m also guiding junior students on real-world projects like <span className="font-bold text-lg">job portals</span> and <span className="font-bold text-lg">waste management systems</span>, which has enhanced my <span className="font-semibold text-lg">leadership and mentoring abilities</span>.
      </p>

      <p>
        From crafting <span className="">animated UIs</span> to building real-time applications with <span className="font-bold">(Convex)</span>, I aim to deliver <span className="font-semibold">clean, efficient, and user-centric</span> code. My goal is to join a <span className="font-bold text-lg">forward-thinking company</span> where I can grow as a developer, contribute meaningfully, and turn challenges into opportunities.
      </p>
    </motion.section>
  );
}