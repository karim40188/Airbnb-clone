import React from "react";

import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import Live from "./components/Live";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header/>
      <Banner />
      <Explore />
      <Live />
      <GreatestOutdoors
        img="/assets/images/photo-1609688669309-fc15db557633.webp"
        title="The Greatest Outdoors"
        text="Wishlists curated by Airbnb"
        linkText="Get Inspired"
      />
      <Footer />
    </>
  );
}
export default Home;
