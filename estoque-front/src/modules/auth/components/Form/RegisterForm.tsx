import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../auth.service";
import BackButton from "../../../../components/Button/BackButton";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/inputs/Input";

export default function RegisterForm() {
      const [name, setNome] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      const [err, setErr] = useState<string | null>(null);

      const navigate = useNavigate();

      async function handleSubmit(el: React.SubmitEvent) {
            el.preventDefault();
            if (!name || !email || !password) {
                  setErr("Preencha todos os campos");
                  return;
            }

            try {
                  await registerService(name, email, password);
                  navigate("/");
            } catch (err) {
                  setErr(
                        err instanceof Error
                              ? err.message
                              : "Erro ao criar Usuário !",
                  );
            }
      }

      return (
            <>
                  <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:justify-center md:items-center">
                              <div className="md:w-1/2">
                                    <Input
                                          label="Nome:"
                                          type="text"
                                          placeholder="Nome"
                                          value={name}
                                          onChange={(el) =>
                                                setNome(el.target.value)
                                          }
                                    />
                                    <Input
                                          label="Email:"
                                          type="email"
                                          placeholder="email@email.com"
                                          value={email}
                                          onChange={(el) =>
                                                setEmail(el.target.value)
                                          }
                                    />
                                    <Input
                                          label="Senha:"
                                          type="password"
                                          placeholder="Sua senha precisa ter um minino de 6 caracteres"
                                          value={password}
                                          onChange={(el) =>
                                                setPassword(el.target.value)
                                          }
                                    />
                              </div>
                              {err && (
                                    <div className="text-sm text-red-500">
                                          {err}
                                    </div>
                              )}
                        </div>
                        <div className="flex flex-row justify-between py-4 md:justify-evenly">
                              <Button type="submit">Cadastrar</Button>
                              <BackButton type="button" />
                        </div>
                  </form>
            </>
      );
}
