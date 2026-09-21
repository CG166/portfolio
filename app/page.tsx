"use client";

import Introblock from "./compontents/Introblock";
import CarouselCardSlider from "./compontents/CarouselCardSlider";
import Aboutme from "./compontents/Aboutme";
import python from "@/data/python.json";
import ContactMe from "./compontents/ContactMe";
import nextjs from "@/data/nextjs.json";
import mysql from "@/data/mysql.json";
import Transition from "./compontents/Transition";


export default function Home() {
  return (
    <main>
      <Introblock></Introblock>
      <Aboutme></Aboutme>
      <Transition height={35}></Transition>
      <CarouselCardSlider
        CardInfoArray={python}
        SectionTitle="Python Projects"
      />
      <Transition height={16}></Transition>
      <CarouselCardSlider
        CardInfoArray={nextjs}
        SectionTitle="Next.js Projects"
      />
      <Transition height={16}></Transition>
      <CarouselCardSlider
        CardInfoArray={mysql}
        SectionTitle="MySQL Projects"
      />
      <ContactMe></ContactMe>
    </main>
  );
}
