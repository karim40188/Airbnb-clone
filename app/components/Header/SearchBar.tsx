"use client";
import React, { useState } from "react";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import { RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Link from "next/link";

export default function SearchBar({placeholder}:{placeholder?:string}) {
  let [input, setInput] = useState("");
  let [numOfGuests, setNumOfGuests] = useState(1);

  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleSelect(ranges: RangeKeyDict) {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  }
  return (
    <div className=" border-2 flex items-center md:shadow-sm rounded-full py-2 pl-2 relative">
      <input
        type="text"
        value={input}
        className="pl-2  bg-transparent placeholder:text-grey-600 flex-grow text-sm outline-none"
        placeholder={placeholder || 'Start your search'}
        onChange={(e) => {
          setInput(e.target.value);
       
        }}
      />
      <SearchIcon className="hidden lg:inline-flex h-8 text-white rounded-full p-2 mx-2 cursor-pointer bg-red-400" />
      {input != "" ? (
        <div className="bg-white absolute top-[100%] left-[50%] -translate-x-1/2">
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={["rgb(248 113 113)"]}
            minDate={new Date()}
            onChange={handleSelect}
          />
          <div className="flex justify-between p-5 items-center">
            <h3>Number of Guests</h3>
            <div className="flex justify-between">
              <UserIcon className="w-5 h-5" />
              <input
                value={numOfGuests}
                type="number"
                min={1}
                onChange={(e) => {
                  setNumOfGuests(Number(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <button
              onClick={() => {
                setInput("");
              }}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              onClick={() => {
                setInput("");
              }}
              className="text-[rgb(235,82,82)]"
            >
              Search
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
