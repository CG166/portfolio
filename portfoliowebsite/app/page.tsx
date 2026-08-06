"use client";

import Introblock from "./compontents/Introblock"; 
import Pcard from "./compontents/Pcard";
import CarouselCardSlider from "./compontents/CarouselCardSlider";

export default function Home() {
  return (
    <main>
      <Introblock></Introblock>
      <CarouselCardSlider></CarouselCardSlider>
    </main>
  );
}
