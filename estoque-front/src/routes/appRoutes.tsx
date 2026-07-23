import { Route, Routes } from "react-router-dom";
import LoginPage from "../modules/auth/pages/Login";
import RegisterPage from "../modules/auth/pages/Register";
import DashBoardPage from "../Pages/Dashboard";

const AppRouter = [
      {
            path: "/",
            element: <LoginPage />,
      },
      {
            path: "/register",
            element: <RegisterPage />,
      },
      {
            path: "/dashboard",
            element: <DashBoardPage />,
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
