import { redirect } from "react-router-dom";
import { api } from "../services/api";

export const exchangeInfoLoader = async () => {
  try {
    const response = await api.get(`/exchange`, { withCredentials: true });
    const data = response.data;

    if (!data) {
      throw new Error("No exchange found in response");
    }
    return data;
  } catch (error) {
    console.error(
      error?.response?.data?.error ||
        error?.response?.data?.message ||
        error.message,
    );
    return null;
  }
};
