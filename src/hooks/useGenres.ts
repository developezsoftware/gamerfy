import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey : ['genres'],
  queryFn : apiClient.getAll,
  staleTime: 12 * 60 * 60 * 1000,
  initialData: { count: genres.length, results: genres }
});

export default useGenres;