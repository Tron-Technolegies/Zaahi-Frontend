import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useGetAddresses = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["address"],
    queryFn: async () => {
      const { data } = await api.get("/address");
      return data;
    },
  });
  return { isError, isLoading, data, error };
};

export const useAddAddress = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.post(`/address/add`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Added");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.patch(`/address/update/${data.id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Updated");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useRemoveAddress = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (id) => {
      await api.patch(`/address/remove/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Removed");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useMakeDefault = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (id) => {
      await api.patch(`/address/default/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Updated");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { isPending, mutateAsync };
};
