import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-hot-toast";

export const useSignin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.post(`/auth/login`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]);
      navigate("/");
      toast.success("Success");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useSignUp = () => {
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.post(`/auth/register`, data);
    },
    onSuccess: () => {
      toast.success("Success");
      navigate("/signin");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async () => {
      await api.post("/auth/logout");
    },
    onSuccess: () => {
      queryClient.removeQueries(["currentUser"]);
      navigate("/");
      toast.success("Logged Out Successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};
