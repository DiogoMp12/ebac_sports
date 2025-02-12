import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as S from './styles';
import cesta from '../../assets/cesta.png';
import { paraReal } from '../../utils/paraReal';
import { Produto } from '../../App';

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items);
  const favoritos = useSelector((state: RootState) => state.favorite.items);

  const valorTotal = itensNoCarrinho.reduce((acc: number, item: Produto) => acc + item.preco, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
};

export default Header;
