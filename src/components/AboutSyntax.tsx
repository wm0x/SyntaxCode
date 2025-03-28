"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  RiCodeSSlashLine,
  RiTeamLine,
  RiBookOpenLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

function AboutSyntax() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="p-6 sm:p-10">
      <motion.div
        className="relative bg-gradient-to-r from-[#1A1A2E] via-[#16213E] to-[#0F3460] p-6 sm:p-8 rounded-3xl w-full max-w-4xl mx-auto border-2 border-white/10 overflow-hidden"
        dir="rtl"
        initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: isMobile ? 0.5 : 0.8 }}
      >
        {!isMobile && (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-purple-500/30 to-transparent blur-3xl"
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: 0.6, scale: 1.1 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-teal-500/30 to-transparent blur-3xl"
              initial={{ opacity: 0.3, scale: 1 }}
              animate={{ opacity: 0.5, scale: 1.2 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </>
        )}

        <div className="flex flex-col items-center gap-6 relative z-10">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: isMobile ? 0 : 0.2,
              duration: isMobile ? 0.5 : 0.8,
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              className="h-20 w-20 rounded-full shadow-lg"
            />
          </motion.div>

          <div className="text-center" dir="rtl">
            <motion.h1
              className="font-bold text-white text-3xl sm:text-4xl leading-snug mb-4 sm:mb-6"
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: isMobile ? 0 : 0.4,
                duration: isMobile ? 0.5 : 0.8,
              }}
            >
              Syntax <span className="text-green-400">Code</span>
            </motion.h1>

            <motion.p
              className="text-white/90 text-sm sm:text-lg leading-relaxed font-[Tajawal] font-medium"
              dir="rtl"
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: isMobile ? 0 : 0.6,
                duration: isMobile ? 0.5 : 0.8,
              }}
            >
              <span className="text-cyan-400">سينتاكس كود</span> هو{" "}
              <span className="text-green-400">نادي كلية الحاسبات في رابغ</span>{" "}
              الذي يتيح للطلاب فرصة{" "}
              <span className="text-yellow-400">إظهار مهاراتهم البرمجية</span>{" "}
              من خلال{" "}
              <span className="text-orange-400">تحديات برمجية متنوعة</span> تحت
              إشراف <span className="text-red-400">مديري الأقسام</span> كما يقدم
              النادي <span className="text-purple-400">دورات تدريبية</span>{" "}
              للطلاب بالإضافة إلى{" "}
              <span className="text-blue-400">مصادر تعليمية</span> لمواد الكلية.
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 "
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: isMobile ? 0 : 0.8,
                duration: isMobile ? 0.5 : 0.8,
              }}
            >
              <div className="flex items-center space-x-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
                <RiCodeSSlashLine className="text-xl sm:text-2xl text-green-400" />
                <h1 className="flex-1 text-center">تحديات برمجية</h1>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-white/10 px-4 py-2 rounded-full ">
                <RiTeamLine className="text-xl sm:text-2xl text-blue-400" />
                <span className="flex-1 text-center">مشاريع جماعية</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
                <RiBookOpenLine className="text-xl sm:text-2xl text-purple-400" />
                <span className="flex-1 text-center">دورات تدريبية</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
                <RiLightbulbFlashLine className="text-xl sm:text-2xl text-yellow-400" />
                <span className="flex-1 text-center">مصادر تعليمية</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSyntax;
