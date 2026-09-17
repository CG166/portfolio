"use client";

import Introblock from "./compontents/Introblock";
import CarouselCardSlider from "./compontents/CarouselCardSlider";
import Aboutme from "./compontents/Aboutme";
import python from "@/data/python.json";
import PTitle from "./compontents/PTitle";
import ContactMe from "./compontents/ContactMe";


export default function Home() {
  return (
    <main>
      <Introblock></Introblock>
      <Aboutme></Aboutme>
      <PTitle></PTitle>
      <CarouselCardSlider
        CardInfoArray={python}
        SectionTitle="Python Projects"
      />
      <ContactMe></ContactMe>
    </main>
  );
}
