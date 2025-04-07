import React from "react";
import ProfileCard from "./profile";

function HowWeAre() {
  return (
    <div className="bg-gradient-to-bl from-[#4C0DC8] via-[#363636] to-[#1A1A2E] min-h-screen flex items-center text-white flex-col">
      <h1 className="text-4xl font-bold flex flex-row" dir="rtl">
        من نحن
        <div className="flex flex-row text-teal-400">؟</div>
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mt-2 opacity-80 text-center max-w-2xl p-4">
        اربع طلاب من كلية الحاسبات نؤمن بأهمية تطوير بيئة التعليم وتعزيز مهارات
        الطلاب في مجالات التقنية واالبرمجية نسعى لخلق مساحة تعليمية مبتكرة تجمع
        بين المعرفة والتطبيق العملي
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="col-span-full flex justify-center">
            <ProfileCard
              title={" إدارة وإنشاء الموقع"}
              img={"myIcon.png"}
              name={"علي الشهري"}
              department={"👨🏻‍💻 علوم حاسب"}
              founder="المؤسس"
            />
        </div>

        <ProfileCard
          title={"إدارة التحديات"}
          img={"myIcon.png"}
          name={"سلمان العتيبي"}
          department={"👨🏻‍💻 تقنية المعلومات"}
          co_founder="عضو مؤسس"
        />
        <ProfileCard
          title={"إدارة الدورات والفعاليات"}
          img={"myIcon.png"}
          name={"هايل المطيري"}
          department={"👨🏻‍💻 تقنية المعلومات"}
          co_founder="عضو مؤسس"
        />
        <ProfileCard
          title={"العلاقات العامة"}
          img={"myIcon.png"}
          name={"نادر العتيبي"}
          department={"👨🏻‍💻 تقنية المعلومات"}
          co_founder="عضو مؤسس"
        />
      </div>
    </div>
  );
}

export default HowWeAre;
