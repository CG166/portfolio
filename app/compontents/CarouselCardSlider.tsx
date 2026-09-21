'use client';

import { useState } from "react";
import Pcard from "./Pcard";
import { useEffect } from "react";

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

    const [current, setCurrent] = useState(1);
    
    const prevSlide = () => {
        setCurrent((prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrent((prev) => prev + 1);
    };

    const loopedCards = [
        CardInfoArray[CardInfoArray.length - 1],
        ...CardInfoArray,
        CardInfoArray[0],
    ];

    useEffect(() => {
        if (current === 0) {
            setTimeout(() => {
                setAnimate(false);
                setCurrent(CardInfoArray.length);
            }, 500);

            setTimeout(() => {
                setAnimate(true);
            }, 550);
        }

        if (current === CardInfoArray.length + 1) {
            setTimeout(() => {
                setAnimate(false);
                setCurrent(1);
            }, 500);

            setTimeout(() => {
                setAnimate(true);
            }, 550);
        }
    }, [current, CardInfoArray.length]);

    const [animate, setAnimate] = useState(true);

    return (
        <main className="bg-blueblack h-[110vh] w-screen flex flex-col items-center justify-center gap-14">
            <div className="bg-black inline-block border-2 border-cyberyellow shadow-[10px_10px_0_0_theme(colors.cyberyellow)]">
                <h1 className="font-orbitron text-6xl font-bold px-8 py-6">{SectionTitle}</h1>
            </div>
            <div className="flex flex-row items-center gap-22
            ">
                <button
                onClick={prevSlide}
                className="w-fit h-fit text-8xl text-bioniccyan">
                    〈
                </button>
                {/* Carousel */}

                <div className="overflow-hidden w-[80vw] h-[70vh]">
                    <div
                        className={`flex gap-8 h-full ${ animate ? "transition-transform duration-500" : ""}`}
                        style={{ transform: `translateX(calc(-${current} * (80vw + 2rem)))`,}} >
                        {loopedCards.map((card, index) => (

                        <div key={`${card.projectTitle}-${index}`} className="basis-full shrink-0">
                            <Pcard
                                projectTitle={card.projectTitle}
                                techStack={card.techStack}
                                githubLink={card.githubLink}
                                demoLink={card.demoLink}
                                description={card.description}
                            />
                        </div>
                        ))}
                    </div>
                    </div>


                {/* Carousel */}
                <button 
                onClick={nextSlide}
                className="w-fit h-fit text-8xl text-bioniccyan">
                    〉   
                </button>
            </div>
        </main>
    )
}