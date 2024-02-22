import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { FetchResponse } from '../services/api-client';
import { Anime } from '../entities/Anime';
import useAnimeQueryStore from '../store';

// Utilisation d'APIClient pour le type Anime
const apiClient = new APIClient<Anime>('/anime');

const useTopAnime = () => {
    const animeQuery = useAnimeQueryStore((s) => s.animeQuery);
  return useInfiniteQuery<FetchResponse<Anime>, Error>({
    queryKey: ['Anime', animeQuery],
    queryFn: ({ pageParam = 1}) => {
      return apiClient.getAll({
        params: { page: pageParam, genres: animeQuery.genreId, order_by: animeQuery.sortOrder, sort: "desc"},
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.pagination.has_next_page ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'), // Temps avant que la donnée devienne obsolète
  });
};

export default useTopAnime;