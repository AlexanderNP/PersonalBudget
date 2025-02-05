import { HomeView } from "./views/Home/HomeView";
import { AuthView } from "./views/Auth/AuthView";

export const routes = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/auth",
    element: <AuthView />,
  },
];
