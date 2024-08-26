import Image from "next/image";
import React from "react";
import logoImg from "/public/assets/images/pngwing.com.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

export default function Header({placeholder}:{placeholder?:string}) {
  return (
    <header className="sticky top-0  shadow-md py-5 bg-white z-50">
      <div className="container grid grid-cols-3  items-center">
        <Link href="/" className="relative h-10 flex items-center  my-auto ">
          <Image
            src={logoImg}
            className="object-contain object-left"
            fill
            alt="logo-img"
          />
        </Link>
        <SearchBar placeholder={placeholder}  />
        <Navbar />
      </div>
    </header>
  );
}
