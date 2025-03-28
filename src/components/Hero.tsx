"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import im1 from "../../public/lottie/coding.json";
import AboutSyntax from "./AboutSyntax";
import { motion } from "framer-motion";

function Hero() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // ❌ تجنب تشغيل الكود في بيئة الخادم

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {typeof window !== "undefined" &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-10"
              initial={{
                y: 0,
                x: Math.random() * windowSize.width,
              }}
              animate={{
                y: windowSize.height,
                x: Math.random() * windowSize.width,
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      <section
        className="flex flex-col items-center justify-start px-6 sm:px-72 text-center pt-32 w-full relative z-10"
        dir="rtl"
      >
        <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-between items-center gap-6 sm:gap-x-8">
          <motion.h1
            className="flex flex-col text-4xl sm:text-6xl font-bold text-center sm:text-end"
            dir="ltr"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-white flex flex-row justify-center sm:justify-end items-center space-x-2 sm:space-x-4 text-center">
              <motion.span
                className="text-green-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                &lt;
              </motion.span>
              <motion.span className="flex flex-row justify-center sm:justify-end items-center space-x-2 sm:space-x-4 text-center">
                <motion.span
                  className="text-green-400"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Syntax
                </motion.span>
                <motion.span
                  className="text-cyan-400"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Code
                </motion.span>
              </motion.span>
              <motion.span
                className="text-cyan-400"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                /&gt;
              </motion.span>
            </div>

            <motion.span
              className="mt-3 sm:mt-4 text-blue-200 font-light text-2xl sm:text-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              حيث يلتقي الإبداع بالتحدي
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Lottie
              animationData={im1}
              className="h-64 sm:h-96 flex"
              loop={true}
            />
          </motion.div>
        </div>
        <AboutSyntax />
      </section>
    </div>
  );
}

export default Hero;
