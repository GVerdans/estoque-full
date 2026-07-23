import { Route, Routes } from "react-router-dom";
import LoginPage from "../modules/auth/pages/Login";
import RegisterPage from "../modules/auth/pages/Register";
import DashBoardPage from "../Pages/Dashboard";
import ProdutosPage from "../modules/Produtos/pages/ProdutosPage";
import PrivateRoute from "./PrivateRoute";

const AppRouter = [
      {
            path: "/",
            element: <LoginPage />,
            private: false,
      },
      {
            path: "/register",
            element: <RegisterPage />,
            private: false,
      },
      {
            path: "/dashboard",
            element: <DashBoardPage />,
            private: true,
      },
      {
            path: "/produtos",
            element: <ProdutosPage />,
            private: true,
      },
];

export default function AppRoutes() {
      return (
            <Routes>
                  {AppRouter.map((route) => (
                        <Route
                              path={route.path}
                              key={route.path}
                              element={
                                    route.private ? (
                                          <PrivateRoute>
                                                {route.element}
                                          </PrivateRoute>
                                    ) : (
                                          route.element
                                    )
                              }
                        />
                  ))}
            </Routes>
      );
}
