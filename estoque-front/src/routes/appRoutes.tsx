import { Route, Routes } from "react-router-dom";
import LoginPage from "../modules/auth/pages/Login";
import RegisterPage from "../modules/auth/pages/Register";

const AppRouter = [
      {
            path: "/",
            element: <LoginPage />,
      },
      {
            path: "/register",
            element: <RegisterPage />,
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
