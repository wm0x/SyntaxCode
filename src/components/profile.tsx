"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive"; // to know device it is mobile or no

interface ProfileCardProps {
  title: string;
  img: string;
  name: string;
  department: string;
  founder?: string;
  co_founder?: string;
}

const ProfileCard = ({
  title,
  img,
  name,
  department,
  founder,
  co_founder,
}: ProfileCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="flex justify-center p-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, height: "16rem" }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: 1,
          height: isExpanded ? "20rem" : "14rem",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={!isMobile ? { height: "20rem" } : {}}
        onClick={() => isMobile && setIsExpanded(!isExpanded)}
        className="relative w-56 sm:w-64 md:w-72 lg:w-80 p-4 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-600 shadow-2xl transition-all duration-500 ease-in-out group overflow-hidden cursor-pointer"
      >
        <div className="relative w-24 h-24 mx-auto mt-4">
          <motion.img
            src={img}
            alt={name}
            className="rounded-full w-full border border-[#fdc500] h-24"
            initial={{ y: 10, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="text-slate-300 text-2xl font-bold mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.div>
        <motion.div
          className="text-amber-400 text-2xl font-thin text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
        >
          {founder}
        </motion.div>
        <motion.div
          className="text-amber-600 text-2xl font-thin text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
        >
          {co_founder}
        </motion.div>
        <motion.div
          className={`flex flex-col items-center justify-center transition-all duration-500 overflow-hidden mt-3 ${
            isExpanded ? "opacity-100" : "opacity-100"
          }`}
        >
          <motion.h3 className="text-[#6366f1]  font-semibold font-[Tajawal] text-center mt-3 text-sm">
            {title}
          </motion.h3>
          {/** first upload */}
          <motion.p className="text-[#fbbf24] text-lg mt-5 px-4 text-center">
            {department}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
