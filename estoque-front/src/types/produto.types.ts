export interface ProdutoType {
      id: string;
      nome: string;
      quantidade: number;
      preco: number;
      ativo: boolean;
}

export interface ProdutoResponse {
      produtos: ProdutoType[];
}

export interface DashboardType {
      totalProdutos: number;
      valorEstoque: number;
      produtosBaixoEstoque?: ProdutoType[];
}

export interface DashboardResponse {
      data: DashboardType;
}
