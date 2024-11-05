import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { addProd } from '../../store/reducers/carrinho'
import { addFav } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type ProdutoComponentProps = {
  produto: ProdutoType
}

const ProdutoComponent = ({ produto }: ProdutoComponentProps) => {
  const dispatch = useDispatch()

  const estaNosFavoritos = useSelector((state: RootReducer) =>
    state.favorito.itens.some((item) => item.id === produto.id)
  )

  const estaNoCarrinho = useSelector((state: RootReducer) =>
    state.carrinho.itens.some((item) => item.id === produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(addFav(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addProd(produto))} type="button">
        {estaNoCarrinho ? 'Já no carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
