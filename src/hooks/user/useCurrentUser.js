import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';

export const useCurrentUser = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const { data } = await api.get('/user/info');
      return data;
    },
  });
  return { isLoading, isError, error, data };
};
