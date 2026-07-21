import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/inputs/Input";

export default function LoginForm() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      function handleSubmit(el: React.FormEvent<HTMLFormElement>) {
            el.preventDefault();
            // service aqui ...
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
                                    <div className="flex flex-row justify-between items-end py-2">
                                          <Button type="submit">Entrar</Button>
                                          <div className="registre-se">
                                                <p className="text-sm">
                                                      Nao possui uma conta ?
                                                      Registre-se aqui !
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </form>
            </>
      );
}
