import axios from "axios";
import { useApiHandler } from "@/actions";
import { fetcher } from "@/actions";
import useSWR from 'swr';


const createPortfolio = (data) => axios.post("/api/auth/portfolios", data);
const updatePortfolio = (id, data) => axios.patch(`/api/auth/portfolios/${id}`, data);
const deletePortfolio = (id) => axios.delete(`/api/auth/portfolios/${id}`);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
export const useDeletePortfolio = () => useApiHandler(deletePortfolio);

export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/auth/portfolios/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};


