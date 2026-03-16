import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';

export const useAddresses = () => {
  return useQuery({
    queryKey: ['addresses'],
    queryFn: async () => {
      const { data } = await api.get('/address');
      return data;
    },
  });
};
