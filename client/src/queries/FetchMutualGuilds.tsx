import { useQuery } from '@tanstack/react-query';
import { getMutualGuilds } from '../utils/apiv1';

export const FetchMutualGuilds = () =>
  useQuery({
    queryKey: ['mutualguilds'],
    queryFn: getMutualGuilds,
    retry: 0,
  });
