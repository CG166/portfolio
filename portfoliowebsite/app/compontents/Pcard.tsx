'use client';

import Techbubble from "./Techbubble";
import { FaGithub } from "react-icons/fa";

type CardProp = {
    projectTitle: string;
    techStack: string[];
    githubLink: string;
    demoLink: string;
    description: string;
};



export default function Pcard({projectTitle, techStack, githubLink, demoLink, description} : CardProp) {


    return(
        <main className="flex flex-col h-[70vh] w-[80vw] items-center justify-center rounded-2xl bg-orange-400">
            <div className="relative h-full w-full overflow-hidden rounded-2xl p-0.75">
            <div className="absolute -inset-full animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_45deg,#06B6D4,#22D3EE,#67E8F9)]" />
            <div className="relative flex flex-col h-full w-full rounded-2xl bg-black">
            
                <div className="flex flex-[7]">
                    <div className="flex w-[55%] flex-col p-5">
                        <h1 className="font-orbitron text-3xl pb-5">{projectTitle}</h1>
                        <iframe
                        className="w-full aspect-video rounded-lg"
                        src={demoLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <div className="flex w-[45%] flex-col overflow-hidden p-5 justify-center">
                        <h1 className="font-orbitron text-2xl pt-5 pl-5 pr-2 pb-2">Tech Stack</h1>
                        <div className="flex flex-wrap gap-2 pb-5 px-3 pl-5 pr-2">
                            {techStack.map((tech) => (
                                <Techbubble key={tech} tech={tech} />
                            ))}
                        </div>
                        
                        <h1 className="font-orbitron text-2xl pt-5 pb-2 pl-5 pr-2">Github</h1>
                        <div className="flex flex-row">
                            <div className="pl-5 pr-2">
                                <FaGithub className="w-10 h-10 text-white" />
                            </div>
                            <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline font-oxanium text-2xl py-3"
                            >
                            {projectTitle}
                            </a>
                        </div>

                    </div>
                </div>

                <div className="flex-[3] overflow-y-auto px-8 py-5">
                    <h1 className="font-orbitron text-2xl pb-2">Description</h1>
                    <p className="font-oxanium text-xl pb-2">
                        {description}
                    </p>

                </div>

                
            </div>
            </div>
        </main>
    )
}