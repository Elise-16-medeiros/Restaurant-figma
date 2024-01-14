"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className="w-full h-72 flex justify-center items-center bg-[#292E36] md:h-[180px]">
        <div className="flex flex-col items-center md:flex-row">
          <span className="px-4 py-1 text-white border-[#E1B168] border-2 rounded">
            Call - 123 456 789
          </span>
          <Image src={Logo} width={200} height={200} alt="logo" />
          <Link className="link-custom-two" href="/reservation">
            reservation
          </Link>
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
