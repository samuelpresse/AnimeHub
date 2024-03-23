import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Character } from '../entities/Character';

const apiClient = new APIClient<Character>('/anime');

const useCharacters = (id: string) =>
  useQuery({
    queryKey: ['Characters', id],
    queryFn: () => apiClient.getAnimeCharacters(id),
  });

export default useCharacters;
