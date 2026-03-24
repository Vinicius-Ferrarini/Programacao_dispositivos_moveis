import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuBotao from '../components/MeuBotao';
import ItemCategoria from '../components/ItemCategoria';
import ItemProduto from '../components/ItemProduto';

const dadosCategorias = [
  { id: '1', nome: 'Eletrônicos', imagem: require('../../../assets/images/categoria_eletronicos.jpg') },
  { id: '2', nome: 'Roupas', imagem: require('../../../assets/images/categoria_roupas.png') },
  { id: '3', nome: 'Casa', imagem: require('../../../assets/images/categoria_casa.jpg') },
  { id: '4', nome: 'Carro', imagem: require('../../../assets/images/categoria_carro.jpg') },
  { id: '5', nome: 'Livros', imagem: require('../../../assets/images/categoria_livros.jpg') },
  { id: '6', nome: 'Esportes', imagem: require('../../../assets/images/categoria_esportes.jpg') },
];

const dadosProdutos = [
  { id: '1', nome: 'Tênis Esportivo', preco: 'R$ 199,90', imagem: require('../../../assets/images/categoria_esportes.jpg') },
  { id: '2', nome: 'Relógio Digital', preco: 'R$ 250,00', imagem: require('../../../assets/images/categoria_esportes.jpg') },
  { id: '3', nome: 'Mochila Preta', preco: 'R$ 120,00', imagem: require('../../../assets/images/categoria_esportes.jpg') },
  { id: '4', nome: 'Fone Bluetooth', preco: 'R$ 89,90', imagem: require('../../../assets/images/categoria_esportes.jpg') },
  { id: '5', nome: 'Câmera', preco: 'R$ 1500,00', imagem: require('../../../assets/images/categoria_esportes.jpg') },
  { id: '6', nome: 'Óculos', preco: 'R$ 59,90', imagem: require('../../../assets/images/categoria_esportes.jpg') },
];

export default function TelaHome({ mudarTela }) {
  return (
    <ScrollView style={styles.tela}>
      <Text style={styles.tituloCategoria}>Categorias</Text>
      
      <View style={styles.areaDoCarrossel}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          pagingEnabled={true}
          contentContainerStyle={styles.listaCategorias}
        >
          {dadosCategorias.map((categoria) => (
            <ItemCategoria key={categoria.id} nome={categoria.nome} imagem={categoria.imagem} />
          ))}
        </ScrollView>
      </View>
      <Text style={styles.tituloSecao}>Produtos em Destaque</Text>
      
      <View style={styles.gridProdutos}> 
        {dadosProdutos.map((produto) => (
          <ItemProduto key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagem} />
        ))}
      </View>

      <MeuBotao titulo="Voltar" acao={() => mudarTela('boasVindas')} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  
  tituloCategoria: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  areaDoCarrossel: { 
    justifyContent: 'center', 
  },

  listaCategorias: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
    paddingHorizontal: 20,
  },
  gridProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',    
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  }
});