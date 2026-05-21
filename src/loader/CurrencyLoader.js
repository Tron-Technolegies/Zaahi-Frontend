import { redirect } from "react-router-dom";
import { api } from "../services/api";

export const exchangeInfoLoader = async () => {
  try {
    const response = await api.get(`/exchange`, { withCredentials: true });
    const data = response.data;

    const response2 = await api.get("/shipping", { withCredentials: true });
    const data2 = response2.data;

    if (!data) {
      throw new Error("No exchange found in response");
    }
    if (!data2) {
      throw new Error("No shipping found in reponse");
    }
    return { data, data2 };
  } catch (error) {
    console.error(
      error?.response?.data?.error ||
        error?.response?.data?.message ||
        error.message,
    );
    return null;
  }
};
