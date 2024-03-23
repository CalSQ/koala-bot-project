import { useQuery } from '@tanstack/react-query';
import { getAuthSession } from '../utils/apiv1';

export const FetchAuthSession = () =>
  useQuery({
    queryKey: ['authstatus'],
    queryFn: getAuthSession,
    retry: 0,
  });
