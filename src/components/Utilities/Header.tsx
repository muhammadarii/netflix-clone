import Image from "next/image";
import React from "react";
import Image1 from "@/img/Header.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Header() {
  return (
    <header className="relative w-full h-screen">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent  to-black  z-10">
        <div className="flex flex-col justify-center h-full items-center gap-2">
          <h1 className="text-white font-bold text-7xl w-[700px] text-center">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-white font-bold text-xl text-center">
            Starts at IDR 54,000. Cancel anytime.
          </p>
          <button className="flex flex-row items-center bg-primary text-2xl text-white px-5 py-3 rounded-lg cursor-pointer font-semibold">
            Finish Sign Up <IoIosArrowForward className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={Image1}
          alt="Header Image"
          className="w-full h-screen object-cover"
        />
      </div>
    </header>
  );
}
