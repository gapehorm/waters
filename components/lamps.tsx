"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import MagicButton from "./MagicButton";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Do you want to <br /> make a change?
      </motion.h1>
      
      
      <p>
        
      </p>
      <a href="mailto:youarenothebest667@gmail.comd">
          <MagicButton
          title="Let's get in touch"

          position="right" icon={undefined}          />
        </a>
      
    </LampContainer>

  );
}
