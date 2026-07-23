import { request } from "../../service/api";
import {
      type DashboardResponse,
      type ProdutoResponse,
} from "../../types/produto.types";

export async function getDashBoard(): Promise<DashboardResponse> {
      return await request("produtos/dashboard");
}

export async function ListaProdutosService(): Promise<ProdutoResponse> {
      return await request("produtos");
}
