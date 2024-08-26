import React from "react";
import { exploreItem } from "../Types/app";
import Image from "next/image";


function SmallCart({ img, location, distance}: exploreItem) {
  return (
    <div>
      <div className="flex gap-3 items-center overflow-hidden transition-all duration-75 ">
        <Image
          src={img}
          alt={location}
          key={distance}
          width={100}
          height={100}
          className="rounded-lg hover:scale-105"
        />
        <div>
          <h5>{location}</h5>
          <p className="text-gray-600">{distance}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallCart;
