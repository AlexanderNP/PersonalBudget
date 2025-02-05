import { hookstate, useHookstate } from "@hookstate/core";
import { localStorageRemove, localStorageWrite, localStorageRead } from "@/utils/localStorage";
import { AuthService } from "@/api/services/authService";
import type { IUserLocalStorage } from "@/type";
import { useNavigate } from "react-router-dom";
interface IAuthStore {
  user: IUserLocalStorage;
}

const initial = hookstate<IAuthStore>({
  user: {
    id: localStorageRead<IUserLocalStorage>("user")?.id ?? "",
    fullName: localStorageRead<IUserLocalStorage>("user")?.fullName ?? "",
    isAuth: localStorageRead<IUserLocalStorage>("user")?.isAuth ?? false,
  },
});

export const useAuthStore = () => {
  const { user } = useHookstate(initial);
  const navigate = useNavigate();

  const login = async (payload: { email: string; password: string }) => {
    const { data, token } = await AuthService.login(payload);
    user.id.set(data.id);
    user.fullName.set(data.fullName);
    user.isAuth.set(true);
    localStorageWrite("accessToken", token);
    localStorageWrite("user", user.get());
  };

  const registration = async (payload: { fullName: string; email: string; password: string }) => {
    await AuthService.registration(payload);
  };

  const checkAuth = async () => {
    try {
      await AuthService.checkAuth();
    } catch (error: unknown) {
      if (typeof error === "string") {
        logout();
        localStorageRemove("budget");
        navigate("/auth");
      }
    }
  };

  const logout = () => {
    localStorageRemove("accessToken");
    localStorageRemove("user");
  };

  return {
    fullName: user.fullName.get(),
    isAuth: user.isAuth.get(),
    id: user.id.get(),
    login,
    logout,
    registration,
    checkAuth,
  };
};
