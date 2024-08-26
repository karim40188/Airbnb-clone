export type exploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type ExploreData = exploreItem[];

type LiveItem = {
  title: string;
  img: string;
};

export type LiveData = LiveItem[] | [] | undefined;

export type ListingCard = {
  img: string,
  location: string,
  title: string,
  description: string,
  star: number,
  price: string,
  total: string,
  long: number,
  lat: number,
};

export type SearchResultData = ListingCard[];
