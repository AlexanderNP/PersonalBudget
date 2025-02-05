import type { IUser } from "@/type";
export interface IAuthResponse {
  token: string;
  data: IUser;
}

export interface ICurrencyResponse {
  base: "RUB";
  rates: Record<string, number>;
}
