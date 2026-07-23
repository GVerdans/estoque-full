import { useEffect, useState } from "react";
import type { ProdutoType } from "../../../types/produto.types";
import { ListaProdutosService } from "../produtos.service";

export default function ListaProdutosComponent() {
      const [produtos, setProdutos] = useState<ProdutoType[]>([]);
      const [err, setErr] = useState("");
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
            async function carregaProdutos() {
                  setIsLoading(true);
                  try {
                        const response = await ListaProdutosService();
                        setProdutos(response.produtos);
                  } catch {
                        setErr("Erro ao carregar produtos !");
                  } finally {
                        setIsLoading(false);
                  }
            }

            carregaProdutos();
      }, []);

      return (
            <>
                  {err && <p className="text-red-500 text-center">{err}</p>}

                  {isLoading && !err && (
                        <p className="animate-pulse text-gray-400 text-center">
                              Carregando...
                        </p>
                  )}

                  {!isLoading && !err && (
                        <div className="flex flex-col gap-1">
                              {produtos.map((prod) => (
                                    <div className="div" key={prod.id}>
                                          <p>{prod.nome}</p>
                                          <p>{prod.quantidade}</p>
                                          <p>{prod.preco}</p>
                                          <p
                                                className={
                                                      prod.ativo
                                                            ? "text-green-600"
                                                            : "text-red-500"
                                                }
                                          >
                                                {prod.ativo
                                                      ? "Ativo"
                                                      : "Inativo"}
                                          </p>
                                    </div>
                              ))}
                        </div>
                  )}
            </>
      );
}
