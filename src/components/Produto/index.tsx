import * as S from './styles'
import { Produto } from '../../App'
import { paraReal } from '../../utils/paraReal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { toggleCart } from '../../store/cartSlice'
import { toggleFavorite } from '../../store/favoriteSlice'

type Props = {
  produto: Produto
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const favItems = useSelector((state: RootState) => state.favorite.items)

  const estaNoCarrinho = cartItems.some(item => item.id === produto.id)
  const estaFavoritado = favItems.some(item => item.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      
      <S.BtnComprar 
        onClick={() => dispatch(toggleFavorite(produto))} 
        type="button"
        className={estaFavoritado ? 'favorito' : ''}
      >
        {estaFavoritado ? '❤️ Remover Favorito' : '♡ Adicionar aos Favoritos'}
      </S.BtnComprar>

      <S.BtnComprar 
        onClick={() => dispatch(toggleCart(produto))} 
        type="button"
        className={estaNoCarrinho ? 'no-carrinho' : ''}
      >
        {estaNoCarrinho ? '🗑️ Remover do Carrinho' : '🛒 Adicionar ao Carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent