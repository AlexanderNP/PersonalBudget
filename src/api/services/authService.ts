import { $host, $authHost } from "@/api/auth";
import { getUrl } from "@/api/utils/getUrl";
import { IAuthResponse } from "@/api/types";
import { IUser } from "@/type";
import { handleError } from "@/api/utils/handleError";

export class AuthService {
  static async login({ email, password }: { email: string; password: string }) {
    try {
      const { data } = await $host.post<Promise<IAuthResponse>>(getUrl("/auth"), {
        email,
        password,
      });
      return data;
    } catch (e: unknown) {
      const message = handleError(e);
      throw message;
    }
  }

  static async registration({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }) {
    try {
      const { data } = await $host.post<Promise<IAuthResponse>>(getUrl("/register"), {
        fullName,
        email,
        password,
      });
      return data;
    } catch (e: unknown) {
      const message = handleError(e);
      throw message;
    }
  }

  static async checkAuth() {
    try {
      const { data } = await $authHost.get<Promise<IUser>>(getUrl("/auth_me"));
      return data;
    } catch (e: unknown) {
      const message = handleError(e);
      throw message;
    }
  }
}
