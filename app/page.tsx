"use client";

import Introblock from "./components/Introblock";
import CarouselCardSlider from "./components/CarouselCardSlider";
import Aboutme from "./components/Aboutme";
import python from "@/data/python.json";
import ContactMe from "./components/ContactMe";
import nextjs from "@/data/nextjs.json";
import mysql from "@/data/mysql.json";
import Transition from "./components/Transition";


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
