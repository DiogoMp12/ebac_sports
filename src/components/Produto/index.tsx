import * as S from './styles';
import { Produto } from '../../App';
import { paraReal } from '../../utils/paraReal';

type Props = {
  produto: Produto;
  aoComprar: () => void;
  favoritar: () => void;
  estaNosFavoritos: boolean;
};

const ProdutoComponent = ({ produto, aoComprar, favoritar, estaNosFavoritos }: Props) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritar} type="button">
        {estaNosFavoritos ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={aoComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  );
};

export default ProdutoComponent;
