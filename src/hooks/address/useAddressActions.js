import { useQueryClient } from '@tanstack/react-query';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export const useAddressActions = () => {
  const queryClient = useQueryClient();

  const addAddress = async (payload) => {
    await api.post('/address/add', payload);
    toast.success('Address added');
    queryClient.invalidateQueries({ queryKey: ['addresses'] });
  };

  const updateAddress = async (id, payload) => {
    await api.patch(`/address/update/${id}`, payload);
    toast.success('Address updated');
    queryClient.invalidateQueries({ queryKey: ['addresses'] });
  };

  const deleteAddress = async (id) => {
    await api.patch(`/address/remove/${id}`);
    toast.success('Address deleted');

    queryClient.invalidateQueries({ queryKey: ['addresses'] });
  };

  const makeDefault = async (id) => {
    await api.patch(`/address/default/${id}`);
    toast.success('Default address updated');
    queryClient.invalidateQueries({ queryKey: ['addresses'] });
  };

  return { addAddress, updateAddress, deleteAddress, makeDefault };
};
