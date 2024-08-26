export const exploreData = async () => {
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    let explore = await response.json();
    return explore;
  } catch (error) {
    console.log(error);
  }
};

export const getLive = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
   let liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResults = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    let searcHResultsData = await res.json();
    return searcHResultsData;
  } catch (error) {
    console.log(error);
  }
};
