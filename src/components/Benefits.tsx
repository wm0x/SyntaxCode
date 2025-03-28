import React from "react";

function Benefits() {
    const benefits = [
        {
          title: "ورش عمل متخصصة",
          description: "ورش عمل ودورات تدريبية حضوريّة وعن بُعد لتطوير المهارات البرمجية",
          icon: "🛠️",
        },
        {
          title: "تحديات ومسابقات برمجية",
          description: "تحديات ومسابقات مستمرة لتنمية القدرات البرمجية والإبداعية",
          icon: "🏆",
        },
        {
          title: "فرص تدريب عملي",
          description: "إضافة الشهادات والجوائز والمشاريع إلى السيرة الذاتية لتعزيز الفرص الوظيفية",
          icon: "🚀",
        },
        {
          title: "شبكة علاقات مهنية",
          description: "بناء شبكة علاقات قوية مع أعضاء الفريق والمهنيين لتهيئة فرص العمل",
          icon: "🤝",
        },
        {
          title: "شهادات معتمدة وجوائز قيمة",
          description: "تقديم شهادات معتمدة وجوائز قيّمة للمشاركين المتميزين",
          icon: "🏅",
        },
        {
          title: "موارد تعليمية شاملة",
          description: "الوصول إلى ورش العمل والدورات التدريبية والمواد التعليمية المتكاملة",
          icon: "📚",
        },
      ];

  return (
    <div className="bg-gradient-to-br from-[#363636] via-[#363636] to-[#4C0DC8] min-h-screen flex items-center justify-center text-white flex-col py-12">
      <h1 className="text-4xl font-bold text-center"> فوائد الانضمام للنادي</h1> <h1 className="text-4xl">👍</h1>
      <p className="text-lg sm:text-xl text-gray-300 mt-2 opacity-80 text-center">
        نبذه عن ما قد يكونه النادي من انعكاس ايجابي على الطلاب
      </p>
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 items-center justify-center">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#000031] rounded-3xl shadow-lg text-center border-dotted border-white border flex flex-col items-center justify-center"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;