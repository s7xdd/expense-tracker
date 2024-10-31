"use client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-14 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl"
        >
          A Finance tracker <br /> <span className="text-5xl">with love</span>
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default Hero;
