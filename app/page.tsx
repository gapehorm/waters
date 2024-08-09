import React from "react";
import { Hero } from "../components/hero";
import { CardHoverEffectDemo } from "../components/card-hover";
import { LayoutGridDemo } from "../components/images";
import { LampDemo } from "../components/lamps";


export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <CardHoverEffectDemo />
      <LayoutGridDemo />
      <LampDemo />
    </div>
  );
}
