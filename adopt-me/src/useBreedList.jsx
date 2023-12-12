import React from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = React.useState([]);
  const [status, setStatus] = React.useState("unloaded");

  React.useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
