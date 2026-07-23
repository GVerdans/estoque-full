import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/inputs/Input";
import { loginService } from "../../auth.service";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [err, setErr] = useState<string | null>(null);

      const navigate = useNavigate();

      async function handleSubmit(el: React.FormEvent<HTMLFormElement>) {
            el.preventDefault();
            setErr(null);
            try {
                  const data = await loginService(email, password);
                  localStorage.setItem("token", data.token);
                  navigate("/dashboard");
            } catch (err) {
                  setErr(
                        err instanceof Error
                              ? err.message
                              : "Erro ao fazer login !",
                  );
            }
      }

      return (
            <>
                  <form onSubmit={handleSubmit}>
                        <div className="flex flex-col align-center items-center my-10">
                              <div className="w-1/2">
                                    <Input
                                          label="Email"
                                          placeholder="email@email.com"
                                          type="email"
                                          value={email}
                                          onChange={(el) =>
                                                setEmail(el.target.value)
                                          }
                                    />
                                    <Input
                                          label="Senha"
                                          placeholder="******"
                                          type="password"
                                          value={password}
                                          onChange={(el) =>
                                                setPassword(el.target.value)
                                          }
                                    />
                                    {err && (
                                          <div className="text-sm text-red-500">
                                                {err}
                                          </div>
                                    )}
                                    <div className="flex flex-col justify-center items-center py-4 md:flex-row md:items-center md:justify-between">
                                          <Button type="submit">Entrar</Button>
                                          <div className="registre-se text-center py-5">
                                                <p className="text-sm">
                                                      Nao possui uma conta ?
                                                      <Link to={"/register"}>
                                                            {" "}
                                                            <span className="hover:text-accent">
                                                                  Registre-se
                                                                  aqui !
                                                            </span>
                                                      </Link>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </form>
            </>
      );
}
