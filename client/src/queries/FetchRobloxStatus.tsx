import { useQuery } from '@tanstack/react-query';
import { getRobloxStatus } from '../utils/apiv1';

export const FetchRobloxStatus = () =>
  useQuery({
    queryKey: ['robloxstatus'],
    queryFn: getRobloxStatus,
    retry: 0,
  });
