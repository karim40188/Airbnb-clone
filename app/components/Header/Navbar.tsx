import React from "react";
import { GlobeAltIcon, MenuAlt1Icon , UserIcon} from "@heroicons/react/solid";


function Navbar() {
  return (
    <div className="flex  items-center space-x-4 text-gray-400 justify-end">
      <p className="text-gray-400 hidden md:inline-flex ml-3">Become a host</p>
      <GlobeAltIcon className=" h-8 " />
      <div className="flex space-x-2  p-1 border-2 rounded-full">
      <MenuAlt1Icon  className=" h-8 "/>
      <UserIcon  className=" h-8 "/>

      </div>
    </div>
  );
}

export default Navbar;
