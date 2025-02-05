import axios from "axios";
import { localStorageRead } from "@/utils/localStorage";
export const API_URL = "https://089f6d2b63a4ebc0.mokky.dev";

export const $host = axios.create({
  baseURL: API_URL,
});

export const $authHost = axios.create({
  baseURL: API_URL,
});

$authHost.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorageRead("accessToken")}`;
  return config;
});
