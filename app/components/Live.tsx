import React from "react";
import MainHeading from "./MainHeading";
import { getLive } from "../Utils/api";
import Image from "next/image";
import { LiveData } from "../Types/app";

async function Live() {
  let data: LiveData = await getLive();
  console.log(data)
  return (
    <section className="py-6">
      <div className="container">
        <MainHeading title="Live Anywhere" />
        <div className="flex gap-3 overflow-scroll no-scrollbar">
          {data?.length ? (
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:scale-105 duration-200"
                >
                  <div className="w-[320px] h-[320px] relative overflow-hidden">
                    <Image
                      src={item.img}
                      fill
                      alt={item.title}
                      className="rounded-3xl"
                    />
                  </div>
                  <p>{item.title}</p>
                </div>
              );
            })
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </section>
  );
}


export default Live;
