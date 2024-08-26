import React from "react";
import { ListingCard } from "../Types/app";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type ListingCartProps = Omit<ListingCard, "long" | "lat">;
function ListingCart({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: ListingCartProps) {
  return (
    <div className="flex my-3 hover:opacity-80 hover:shadow-lg cursor-pointer transition duration-200 p-">
      <div className="relative w-[350px] h-52 flex-shrink-0 ">
        <Image
          fill
          src={img}
          className="w-full  object-cover rounded-xl"
          alt="search-img"
        />
      </div>
      <div className="ml-3 flex flex-col gap-3 flex-grow px-2 py-4">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7" />
        </div>
        <p className=" text-xl">{title}</p>
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
        <p className="font-bold text-right text-2xl">{price}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <StarIcon className="h-7 text-orange-400" />
            <p className="">{star}</p>
          </div>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default ListingCart;
