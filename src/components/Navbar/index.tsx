import Image from "next/image";
import React from "react";
import Logo from "@/img/Wordmark.png";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between m-3 md:m-6 md:px-5 bg-transparent opacity-100">
        <Image src={Logo} alt="logo" className=" md:w-[150px] cursor-pointer" />
        <div>
          <button className="bg-primary px-4 py-2 rounded-lg cursor-pointer font-bold">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
