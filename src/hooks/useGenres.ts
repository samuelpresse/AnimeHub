import ms from 'ms';
import APIClient from '../services/api-client';
import { Genre } from '../entities/Anime';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Genre>('/genres/anime');

const useGenres = () => 
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
      });

export default useGenres;