"use client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3 mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-10 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl"
        >
          A Finance tracker <br /> <span className="text-3xl text-red-300">made with love ❤️</span>
          
        <div className="mt-3 hover:scale-125 duration-200">
          <Link href='https://www.github.com/s7xdd'>
            <FaGithub color="white" size={40}/>
          </Link>
        </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default Hero;
