"use client";

import React, { useState } from "react";

function Footer() {
  let [links, setLIink] = useState([
    {
      name: "ABOUT",
      urls: [
        "How Airbnb works",
        "Newsroom",
        "Investors",
        "Airbnbn Plus",
        "Airbnb Luxe",
      ],
    },
    {
      name: "COMMUNITY",
      urls: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      name: "HOST",
      urls: [
        "Papa React",
        "Presents",
        "Zero to full Stack Here",
        "Hundreds of Students",
        "Join Now",
      ],
    },
    {
      name: "SUPPORT",
      urls: [
        " Help Centre",
        " Trust & Safety",
        "Say Hi Youtube",
        "Easer Eggs",
        "For the Win",
      ],
    },
  ]);
  return (
    <footer className="py-5  text-sm bg-gray-100  mt-5">
      <div className="container">
        <div className="grid grid-cols-4">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <h3 className="font-semibold">{link.name}</h3>
                {link.urls.map((item) => {
                  return (
                    <div key={item}>
                      <p className="my-2 text-gray-600">{item}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
