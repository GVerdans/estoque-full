import { Route, Routes } from "react-router-dom";
import AuthPage from "../modules/auth/auth.page";

const AppRouter = [
      {
            path: "/",
            element: <AuthPage />,
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
