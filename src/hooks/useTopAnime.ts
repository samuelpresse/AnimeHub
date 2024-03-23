import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { FetchResponse } from '../services/api-client';
import { Anime } from '../entities/Anime';

const apiClient = new APIClient<Anime>('/top/anime');

const useTopAnime = () => {

  return useInfiniteQuery<FetchResponse<Anime>, Error>({
    queryKey: ['topAnime'],
    queryFn: ({ pageParam = 1}) => {
      return apiClient.getAll({
        params: { page: pageParam},
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.pagination.has_next_page ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useTopAnime;