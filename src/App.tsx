import { useGetProductsQuery } from './store/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import Header from './components/Header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './styles';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

function App() {
  const { data: produtos, isLoading, error } = useGetProductsQuery();
  const carrinho = useSelector((state: RootState) => state.cart.items);
  const favoritos = useSelector((state: RootState) => state.favorite.items);

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos</p>}
        {produtos && <Produtos produtos={produtos} />}
      </div>
    </>
  );
}

export default App;
