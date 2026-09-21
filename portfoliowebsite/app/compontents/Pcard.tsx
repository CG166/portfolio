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
            
                <div className="flex h-full">
                    <div className="flex flex-col w-[55%] p-[4%]">
                        <h1 className="font-orbitron text-4xl pb-[7%]">{projectTitle}</h1>
                        <iframe
                        className="w-full aspect-video rounded-lg self-center"
                        src={demoLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <div className="flex w-[45%] flex-col overflow-hidden p-[3%] justify-center">
                        <h1 className="font-orbitron text-2xl pb-[1%]">Tech Stack</h1>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <Techbubble key={tech} tech={tech} />
                            ))}
                        </div>
                        
                        <h1 className="font-orbitron text-2xl pt-[4%] pb-[1%]">Github</h1>
                        <div className="flex flex-row">
                            <div className="">
                                <FaGithub className="w-10 h-10 text-white" />
                            </div>
                            <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline font-oxanium text-2xl"
                            >
                            {projectTitle}
                            </a>
                        </div>

                        <div className="pt-[4%]">
                            <h1 className="font-orbitron text-2xl pb-[2%]">Description</h1>
                            <p className="font-oxanium text-xl pb-[2%]">
                                {description}
                            </p>

                        </div>

                    </div>
                </div>
   
            </div>
            </div>
        </main>
    )
}