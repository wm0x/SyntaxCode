"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const languages = [
  { name: "Java", img: "/java.png" },
  { name: "Python", img: "/python.png" },
  { name: "JavaScript", img: "/javascript.png" },
  { name: "TypeScript", img: "/typescript.png" },
  { name: "C#", img: "/c-sharp.png" },
  { name: "React", img: "/react.png" },
  { name: "CSS", img: "/css.png" },
  { name: "HTML", img: "/html.png" },
];

const LanguageTicker = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Duplicate the languages array to be the line infinte
  const duplicatedLanguages = [...languages, ...languages , ...languages];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-[#1A1A2E] to-[#363636]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">🖥️ اللغات المدعومة </h2>
        <p className="text-lg text-gray-300 mt-2">اللغات التي ندعمها</p>
      </div>

      {isMobile ? (
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 p-2 hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={lang.img}
                alt={lang.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl text-white">{lang.name}</span>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex space-x-12 text-white text-lg font-semibold uppercase whitespace-nowrap items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedLanguages.map((lang, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 px-6 hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={lang.img}
                alt={lang.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl">{lang.name}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {!isMobile && (
        <>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1A1A2E] to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#363636] to-transparent"></div>
        </>
      )}
    </div>
  );
};

export default LanguageTicker;