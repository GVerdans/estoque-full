import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { JwtUser } from "../types/auth.types";

interface AuthContextType {
      user: JwtUser | null;
      login: (token: string) => void;
      logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function getUserFromToken(): JwtUser | null {
      const token = localStorage.getItem("token");
      if (!token) return null;

      try {
            return jwtDecode(token);
      } catch {
            return null;
      }
}

export function AuthProvider({ children }: { children: ReactNode }) {
      const [user, setUser] = useState<JwtUser | null>(getUserFromToken);

      function login(token: string) {
            localStorage.setItem("token", token);
            const decoded = jwtDecode<JwtUser>(token);
            setUser(decoded);
      }

      function logout() {
            localStorage.removeItem("token");
            setUser(null);
      }

      return (
            <AuthContext.Provider value={{ user, login, logout }}>
                  {children}
            </AuthContext.Provider>
      );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
      const context = useContext(AuthContext);
      if (!context) {
            throw new Error(
                  "useAuth precisa ser usado dentro de um AuthProvider",
            );
      }
      return context;
}
