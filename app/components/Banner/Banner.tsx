import React from "react";
import BannerImg from "../../../public/assets/images/photo-1562832135-14a35d25edef.webp";
import Image from "next/image";

function Banner() {
  return (
    <>
      <div className="relative flex items-center h-[400px] ">
        <Image src={BannerImg} alt="banner-img" className="object-cover" fill />

        <div className="absolute top-1/2 -translate-y-1/2  left-1/2  text-center -translate-x-1/2 mt-5">
          <p>Not sure where to go? Perfect.</p>
          <button className="px-5 py-3 mt-3 rounded-2xl bg-white text-sky-400">
            I am flexible
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
