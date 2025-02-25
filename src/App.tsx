import { useEffect } from 'react';
import { useGetProductsQuery } from './store/apiSlice';
import Header from './components/Header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './styles';

function App() {
  const { data: produtos, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="container">
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos</p>}
        {produtos && <Produtos produtos={produtos} />}
      </div>
    </>
  );
}

export default App;
