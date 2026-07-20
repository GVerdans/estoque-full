import Button from "../../../../components/Button/Button";
import Input from "../../../../components/inputs/Input";

export default function LoginForm() {
      return (
            <>
                  <form>
                        <div className="flex flex-col align-center items-center">
                              <div className="w-1/2">
                                    <Input
                                          label="Email"
                                          placeholder="email@email.com"
                                          type="email"
                                    />
                                    <Input
                                          label="Senha"
                                          placeholder="******"
                                          type="password"
                                    />
                                    <div className="flex flex-row justify-between items-end py-2">
                                          <Button>Entrar</Button>
                                          <div className="registre-se">
                                                <p>
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
