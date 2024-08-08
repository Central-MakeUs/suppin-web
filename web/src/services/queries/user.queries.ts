import { queries } from '@/lib/query-keys';
import { getUserInfo } from '@/services/apis/user.service';
import { useQuery } from '@tanstack/react-query';

export const useUserInfo = () => {
  const userInfo = useQuery({
    queryKey: queries.user.DEFAULT,
    queryFn: getUserInfo,
    select: data => data.data,
  });

  return {
    userInfo,
  };
};
