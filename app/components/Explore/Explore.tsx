import { ExploreData } from "@/app/Types/app";

import { exploreData } from "@/app/Utils/api";
import React from "react";
import SmallCart from "../SmallCart";
import MainHeading from "../MainHeading";

async function Explore() {
  let results: ExploreData = (await exploreData()) || [];
  console.log(results);

  return (
    <section>
      <div className="container">
        <MainHeading title="Explore Nearby" />
        <div className="grid grid-cols-4 gap-3">
          {results.map((item, index) => {
            return (
              <SmallCart
                key={item.location}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Explore;
