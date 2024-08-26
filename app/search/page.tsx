import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getSearchResults } from "../Utils/api";
import { SearchResultData } from "../Types/app";
import ListingCart from "../components/ListingCart";
import MapComponent from "../components/MapComponent";

type searchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: number;
};
async function searchResults({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: searchParams;
}) {
  let formatedStartDate;
  let formatedEndDate;

  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), `dd MMMM yy`);
    formatedEndDate = format(new Date(endDate), `dd MMMM yy`);
  }
  let range = `${formatedStartDate} - ${formatedEndDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];
  const results: SearchResultData = await getSearchResults();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />
      <section className="my-5 px-2">
        <div className=" space-y-5 flex">
          <div>
            <p className="text-sm">
              300+ Stays - {range} - for {numOfGuests} guests
            </p>
            <h2 className="text-4xl font-semibold">Stays in {location}</h2>

            <div className="space-x-4 text-slate-700 border-slate-300 rounded">
              {filters.map((item) => {
                return (
                  <button key={item} className="filter-btn">
                    {item}
                  </button>
                );
              })}
            </div>

            <div>
              {results.map((item) => {
                return (
                  <ListingCart
                  key={item.title}
                    img={item.img}
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    star={item.star}
                    price={item.price}
                    total={item.total}
                  />
                );
              })}
            </div>
          </div>
          <div className="hidden xl:inline-flex xl:min-w-[600px]">
            <MapComponent searchResultData={results} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default searchResults;
