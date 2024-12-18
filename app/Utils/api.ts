export const exploreData = async () => {
  try {
    let response = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
    let explore = await response.json();
    return explore;
  } catch (error) {
    console.log(error);
  }
};

export const getLive = async () => {
  try {
    let res = await fetch(`https://www.jsonkeeper.com/b/VHHT`);
   let liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResults = async () => {
  try {
    let res = await fetch(`https://www.jsonkeeper.com//b/5NPS`);
    let searcHResultsData = await res.json();
    return searcHResultsData;
  } catch (error) {
    console.log(error);
  }
};
