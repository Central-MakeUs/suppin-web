import { queries } from '@/lib/query-keys';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../apis/user.service';

export const useGetEvent = () => {
  const eventsData = useQuery({
    queryKey: queries.events.DEFAULT,
    queryFn: getEvents,
  });

  return { eventsData };
};
