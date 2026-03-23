import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const useCurrentUser = () => {
  const { setCurrentUser } = useContext(UserContext);
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const { data } = await api.get("/user/info");
      setCurrentUser(data);
      return data;
    },
  });
  return { isLoading, isError, error, data };
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.patch(`/user/profile`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast.success("Updated");
    },
    onError: (error) => {
      toast.error(error.response.data.message || error.response.data.error);
    },
  });
  return { isPending, mutateAsync };
};

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.patch(`/user/update-password`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast.success("Updated");
    },
    onError: (error) => {
      toast.error(error.response.data.message || error.response.data.error);
    },
  });
  return { isPending, mutateAsync };
};
