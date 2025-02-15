import { Produto } from '../App';
import ProdutoComponent from '../components/Produto';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

type Props = {
  produtos: Produto[];
};

const Produtos = ({ produtos }: Props) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  );
};

export default Produtos;
