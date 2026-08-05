"use client";

import Introblock from "./compontents/Introblock"; 
import Pcard from "./compontents/Pcard";

export default function Home() {
  return (
    <main>
      <Introblock></Introblock>
      <Pcard
        projectTitle="Project Name"
        techStack={["Python", "Javascript", "Tailwind CSS", "Vercel", "Next.js"]}
        githubLink="https://github.com"
        demoLink="https://www.youtube.com/embed/UTOHc8ADc8w?si=ZwRsYSGh0dwCooTv"
        description="This project is a modern web application built with Next.js and Tailwind CSS. It focuses on delivering a clean, responsive user experience while demonstrating best practices in frontend development, component-based architecture, and performance optimization."
      />
    </main>
  );
}
