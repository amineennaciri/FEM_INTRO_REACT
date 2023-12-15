import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [
    results?.data?.breeds ?? [],
    results.status,
  ]; /*this is saying if it is available then give me the results, the "??" means that if results?.data?.breeds fails then give me an empty array [] */
  /*
    In summary, the useBreedList hook returns an array with two elements:
    
    The first element is the breed list (results?.data?.breeds), with an empty array ([]) as a fallback in case the breed list is not available or the data fetching operation encounters an error.
    
    The second element is the status of the data fetching operation (results.status).
  */
}
