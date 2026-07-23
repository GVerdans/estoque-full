import BackButton from "../../../components/Button/BackButton";
import Header from "../../../components/Header/Header";
import ListaProdutosComponent from "../components/ListaProdutos";

export default function ProdutosPage() {
      return (
            <>
                  <Header texto="Lista de Produtos" />
                  <div className="con">
                        <ListaProdutosComponent />
                  </div>
                  <div className="btn">
                        <BackButton />
                  </div>
            </>
      );
}
