import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="w-full overflow-hidden py-8 bg-gradient-to-r from-[#1A1A2E] to-[#363636] p-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 gap-x-12 text-center lg:text-left">
          <div className="flex items-center space-x-4 justify-between">
            <Image
              src="/KAU_logo.png"
              alt="KAU logo"
              width={100}  
              height={150} 
            />
          </div>
          <Image
            src="/FCIT.png"
            alt="FCIT logo"
            width={120} 
            height={120}
          />
          <ul className="flex gap-y-2 gap-x-8 text-3xl">
            <li>
              <a
                href="#"
                className="text-slate-300 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="size-11"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-300 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <Image
                  src="/discord.png"
                  alt="Discord"
                  width={40}  
                  height={40} 
                  className="size-10"
                />
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-8 text-center text-sm border-t border-fuchsia-700 pt-4 text-white flex justify-center items-center">
          SyntaxCode © 2025 - Dev by
          <a
            href="http://"
            className="text-red-500 flex items-center ml-1 hover:underline"
          >
            wm <span className=" text-black">0</span>
            x
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
