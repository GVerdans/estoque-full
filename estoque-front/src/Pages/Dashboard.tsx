import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getDashBoard } from "../modules/Produtos/produtos.service";
import { type DashboardType } from "../types/produto.types";

export default function DashBoardPage() {
      const [dashboard, setDashboard] = useState<DashboardType | null>(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
            getDashBoard()
                  .then((res) => setDashboard(res.data))
                  .catch((err) =>
                        setError(
                              err instanceof Error
                                    ? err.message
                                    : "Erro ao carregar dados !",
                        ),
                  )
                  .finally(() => setLoading(false));
      }, []);

      const valorFormatado = dashboard
            ? new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
              }).format(dashboard.valorEstoque)
            : null;

      return (
            <>
                  <Header texto={`Bem-Vindo, nome !`} />
                  <div className="flex flex-col border rounded-2xl shadow-sm p-6 my-10 items-center">
                        <div className="w-full md:w-2/3 lg:w-1/2">
                              <p className="text-center border-b pb-3 mb-6 text-accent font-medium">
                                    Seu resumo do Estoque
                              </p>

                              {loading && (
                                    <p className="animate-pulse text-gray-400 text-center">
                                          Carregando...
                                    </p>
                              )}
                              {error && (
                                    <p className="text-red-500 text-center">
                                          {error}
                                    </p>
                              )}

                              {!loading && !error && dashboard && (
                                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                                          <div className="flex flex-col items-center border rounded-lg p-6 flex-1">
                                                <p className="text-sm text-gray-500">
                                                      Total de Produtos
                                                </p>
                                                <p className="text-3xl font-bold text-accent">
                                                      {dashboard.totalProdutos}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                      Unidades
                                                </p>
                                          </div>

                                          <div className="flex flex-col items-center border rounded-lg p-6 flex-1">
                                                <p className="text-sm text-gray-500">
                                                      Valor em Estoque
                                                </p>
                                                <p className="text-3xl font-bold text-accent">
                                                      {valorFormatado}
                                                </p>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
            </>
      );
}
