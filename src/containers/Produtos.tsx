import { Produto } from '../App';
import ProdutoComponent from '../components/Produto';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleFavorite } from '../store/favoriteSlice';
import { addToCart } from '../store/cartSlice';

type Props = {
  produtos: Produto[]; // ← Apenas esta prop é necessária agora
};

const Produtos = ({ produtos }: Props) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: RootState) => state.favorite.items);

  const produtoEstaNosFavoritos = (produto: Produto) => favoritos.some((f) => f.id === produto.id);

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={() => dispatch(toggleFavorite(produto))}
          aoComprar={() => dispatch(addToCart(produto))}
        />
      ))}
    </S.Produtos>
  );
};

export default Produtos;
