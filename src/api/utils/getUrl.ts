import { API_URL } from "@/api/auth";

export const getUrl = (path: string, params?: string) => {
  const url = new URL(path, API_URL);
  url.search = new URLSearchParams(params).toString();
  return url.toString();
};
