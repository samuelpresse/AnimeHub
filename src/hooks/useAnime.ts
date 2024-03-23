import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Anime } from '../entities/Anime';

const apiClient = new APIClient<Anime>('/anime');

const useAnime = (id: string) =>
  useQuery({
    queryKey: ['Anime', id],
    queryFn: () => apiClient.get(id),
  });

export default useAnime;
