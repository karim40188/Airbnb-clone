import Image from "next/image";
import React from "react";
import footerImg from "../../public/assets/images/photo-1609688669309-fc15db557633.webp";
import Link from "next/link";
function GreatestOutdoors({
  img,
  title,
  text,
  linkText,
}: {
  img: string;
  title: string;
  text: string;
  linkText: string;
}) {
  return (
    <>
      <section>
        <div className="container relative w-full h-[400px]">
          <Image
            src={img}
            alt="GreatestOutdoor-img"
            fill
            className="object-cover  rounded-3xl"

          />
          <div className="absolute top-1/2 left-7">
            <h2 className="text-3xl font-semibold ">{title}</h2>
            <p className="text-gray-600 text-sm my-3">{text}</p>
            <Link className="bg-slate-900 text-white text-sm p-3 rounded-md" href="/">
              {linkText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default GreatestOutdoors;
