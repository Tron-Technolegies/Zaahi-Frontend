import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';

export const useAddresses = () => {
  return useQuery({
    queryKey: ['addresses'],
    queryFn: async () => {
      const { data } = await api.get('/address');

      const { addresses, defaultAddress } = data;

      const formatted = addresses.map((addr) => ({
        ...addr,
        isDefault: defaultAddress && addr._id === defaultAddress._id,
      }));

      return formatted;
    },
  });
};
