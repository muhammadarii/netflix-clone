import Image from "next/image";
import React from "react";
import Logo from "@/img/Wordmark.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between m-3 md:m-6 md:px-5 bg-transparent opacity-100">
        <Image
          src={Logo}
          alt="Company Logo"
          className="md:w-[150px] cursor-pointer"
          priority
        />
        <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer font-bold">
          Sign In
        </button>
      </div>
    </nav>
  );
}
