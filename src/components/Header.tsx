import React from "react";
import Image from "next/image"; 
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 pt-4">
      <div className="container max-w-3xl w-full px-4 mx-auto ">
        <div className="relative flex justify-between items-center border border-slate-700 p-2.5 rounded-full bg-white/20 backdrop-blur-lg shadow-lg">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="logo" 
              width={44} 
              height={44} 
              className="h-11 w-11" 
            />
            <h1 className="font-bold flex flex-row text-white">
              Syntax <span className="text-green-400">Code</span>
            </h1>
          </div>
          <div className="flex items-center">
            <a href="#">
              <Button
                variant="link"
                className="text-white underline decoration-[#00FCA8] hover:decoration-[#4586FF] underline-offset-4 text-xs sm:text-md"
              >
                انشاء حساب
              </Button>
            </a>
            <a href="#">
              <Button variant="SyntaxBtn" className="text-white text-xs sm:text-md">
                تسجيل الدخول
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
