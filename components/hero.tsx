import React from "react";
import { Vortex } from "./ui/vortex";

export function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black" // Or use a dark blue if preferred
        rangeY={800}
        particleCount={500}
        baseHue={200} // Set to blue hue
        className="absolute inset-0 flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Life Below Water
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Protect our oceans and marine life. Join us in supporting SDG Goal 14 to ensure the conservation and sustainable use of the oceans.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://www.youtube.com/watch?v=rzSBtx_bZc4" // Replace with your actual route
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] text-center"
          >
            Learn More
          </a>
          <a
            href="" // Replace with your actual route
            className="px-4 py-2 text-white text-center"
          >
            Get Involved
          </a>
        </div>
      </Vortex>
    </div>
  );
}
