import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button/Button";

export default function NavBar() {
      const { user, logout } = useAuth();

      return (
            <header className="flex h-16 items-center justify-between border-b border-accent px-6">
                  <h1 className="text-xl font-bold text-accent">Estoque</h1>
                  {user && (
                        <Button variant="danger" onClick={logout}>
                              Sair
                        </Button>
                  )}
            </header>
      );
}
