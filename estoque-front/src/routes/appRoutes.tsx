import { Route, Routes } from "react-router-dom";
import AuthPage from "../modules/auth/pages/Login";

const AppRouter = [
      {
            path: "/",
            element: <AuthPage />,
      },
      {
            path: "/register",
            element: "",
      },
];

export default function AppRoutes() {
      return (
            <Routes>
                  {AppRouter.map((route) => (
                        <Route
                              path={route.path}
                              key={route.path}
                              element={route.element}
                        />
                  ))}
            </Routes>
      );
}
