import React from "react";
import Image from "next/image";

function WhatIsSyntax() {
  return (
    <div
      className="bg-gradient-to-b from-transparent via-[#371d6a] to-[#363636] p-6 w-full mx-auto mt-4"
      dir="rtl"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white opacity-90">
            التحديات فالنادي 🧩
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mt-4 opacity-80">
            اختبر مهاراتك من خلال مجموعة من التحديات والمشاريع التفاعلية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 max-w-6xl w-full mx-auto mt-8">
          {[
            {
              title: "مشاريع متقدمة",
              description:
                "تطوير أنظمة معقدة مثل المتاجر الإلكترونية ولوحات التحكم",
              image1: "/programming_project.png", 
              translate: "-translate-y-8 sm:-translate-y-5 ",
            },
            {
              title: "تحديات برمجية",
              description:
                "حل مسائل خوارزمية وتحديات مثل LeetCode و منصة سطر",
              image1: "/dev_challenge.png", 
              location: "-translate-y-2",
              translate: " sm:translate-y-8 ",
            },
            {
              title: "تطوير الويب",
              description: "إنشاء مواقع ويب باستخدام React و Next.js",
              image1: "/web_dev.png", 
              translate: "translate-y-5 sm:-translate-y-5 ",
            },
            {
              title: "برمجة الذكاء الاصطناعي",
              description: "بناء نماذج تعلم آلي باستخدام Python ",
              image1: "/ai.png", 
              location: "h-13 w-13",
              translate: "translate-y-10 ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-300 ease-in-out transform hover:scale-105 ${item.translate}`}
            >
              <Image
                src={item.image1}
                alt={item.title}
                width={100} 
                height={100} 
                className={`absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-14 w-16 sm:w-24 z-10 ${item.location}`}
              />

              <div className="bg-[#e0e0e0] bg-opacity-10 rounded-3xl p-6 pt-12 text-white font-extrabold text-center relative z-0 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 overflow-hidden after:rounded-3xl after:outline-white/20 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-[#4f3b72] hover:to-[#2d2d2d]">
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mt-3 font-normal opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatIsSyntax;
