'use client';

import { useState } from "react";
import Pcard from "./Pcard";

type ProjectData = {
    projectTitle: string;
    techStack: string[];
    githubLink: string;
    demoLink: string;
    description: string;
};

type CCSProp = {
    CardInfoArray: ProjectData[];
    SectionTitle: string;
};

export default function CarouselCardSlider({CardInfoArray, SectionTitle, }: CCSProp) {

    const [current, setCurrent] = useState(0);
    
    const prevSlide = () => {
        setCurrent((prev) =>
        prev === 0 ? CardInfoArray.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrent((prev) =>
        prev === CardInfoArray.length - 1 ? 0 : prev + 1
        );
    };

    const card = CardInfoArray[current];

    return (
        <main className="bg-red-600 h-screen w-screen flex flex-col items-center justify-center gap-6">
            <div className="bg-black inline-block border-2 border-cyberyellow shadow-[10px_10px_0_0_theme(colors.cyberyellow)]">
                <h1 className="font-orbitron text-6xl font-bold px-8 py-6">Python</h1>
            </div>
            <div className="flex flex-row items-center gap-22
            ">
                <button className="w-fit h-fit text-8xl">
                    〈
                </button>
                <Pcard
                    projectTitle="Project Name"
                    techStack={["Python", "Javascript", "Tailwind CSS", "Vercel", "Next.js"]}
                    githubLink="https://github.com"
                    demoLink="https://www.youtube.com/embed/UTOHc8ADc8w?si=ZwRsYSGh0dwCooTv"
                    description="This project is a modern web application built with Next.js and Tailwind CSS. It focuses on delivering a clean, responsive user experience while demonstrating best practices in frontend development, component-based architecture, and performance optimization."
                />
                <button className="w-fit h-fit text-8xl">
                    〉   
                </button>

            </div>

        </main>
    )
}