import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import * as S from './styles';
import { Produto } from '../../App';
import { toggleCart, clearCart } from '../../store/cartSlice';
import { toggleFavorite } from '../../store/favoriteSlice';
import { FaHeart, FaTimes } from 'react-icons/fa';
import { paraReal } from '../../utils/paraReal';
import cesta from '../../assets/cesta.png';

const Header = () => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const { items: favItems } = useSelector((state: RootState) => state.favorite);

  const valorTotal = cartItems.reduce((acc, item) => acc + item.preco, 0);

  return (
    <S.Header>
      <S.NavIcons>
        <S.IconWrapper onClick={() => dispatch(toggleFavorite())}>
          <FaHeart className="icon" />
          <S.Badge>{favItems.length}</S.Badge>
        </S.IconWrapper>

        <S.CartWrapper>
          <S.IconWrapper>
            <img src={cesta} alt="Carrinho" className="cesta-icon" />
            <S.Badge>{cartItems.length}</S.Badge>
          </S.IconWrapper>

          <S.CartDropdown>
            {cartItems.length === 0 ? (
              <S.EmptyCart>Carrinho vazio</S.EmptyCart>
            ) : (
              <>
                {cartItems.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.imagem} alt={item.nome} width="40" />
                    <div>
                      <h4>{item.nome}</h4>
                      <p>{paraReal(item.preco)}</p>
                    </div>
                    <FaTimes className="remove-icon" onClick={() => dispatch(toggleCart(item))} />
                  </S.CartItem>
                ))}
                <S.CartTotal>
                  <span>Total:</span>
                  <strong>{paraReal(valorTotal)}</strong>
                </S.CartTotal>
                <S.ClearButton onClick={() => dispatch(clearCart())}>Limpar Carrinho</S.ClearButton>
              </>
            )}
          </S.CartDropdown>
        </S.CartWrapper>
      </S.NavIcons>
    </S.Header>
  );
};

export default Header;
