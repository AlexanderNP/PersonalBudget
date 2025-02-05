import { Routes, Route } from "react-router-dom";
import { routes } from "@/routes";

export const AppRouter = () => (
  <Routes>
    {routes.map(({ element, path }) => (
      <Route
        element={element}
        path={path}
      />
    ))}
  </Routes>
);
