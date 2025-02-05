import { CategoryTypes } from "@/constants";

export interface IExpensesCategory {
  [CategoryTypes.Clothes]: number;
  [CategoryTypes.Divorce]: number;
  [CategoryTypes.Health]: number;
  [CategoryTypes.Home]: number;
  [CategoryTypes.Transport]: number;
}

export interface IUser {
  id: number | string;
  fullName: string;
  email: string;
}

export interface IUserLocalStorage extends Omit<IUser, "email"> {
  isAuth: boolean;
}
