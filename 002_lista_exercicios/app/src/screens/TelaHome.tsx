import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuBotao from '../components/MeuBotao';
import ItemCategoria from '../components/ItemCategoria';
import ItemProduto from '../components/ItemProduto';

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
        
          <ItemCategoria nome="Eletrônicos" imagem={require('../../../assets/images/categoria_eletronicos.jpg')} />
          <ItemCategoria nome="Roupas" imagem={require('../../../assets/images/categoria_roupas.png')} />
          <ItemCategoria nome="Casa" imagem={require('../../../assets/images/categoria_casa.jpg')} />
          <ItemCategoria nome="Carro" imagem={require('../../../assets/images/categoria_carro.jpg')} />
          <ItemCategoria nome="Livros" imagem={require('../../../assets/images/categoria_livros.jpg')} />
          <ItemCategoria nome="Esportes" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
        </ScrollView>
      </View>
      <Text style={styles.tituloSecao}>Produtos em Destaque</Text>
      
      <View style={styles.gridProdutos}>
        <ItemProduto nome="Tênis Esportivo" preco="R$ 199,90" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
        <ItemProduto nome="Relógio Digital" preco="R$ 250,00" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
        <ItemProduto nome="Mochila Preta" preco="R$ 120,00" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
        <ItemProduto nome="Fone Bluetooth" preco="R$ 89,90" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
        <ItemProduto nome="Fone Bluetooth" preco="R$ 89,90" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
        <ItemProduto nome="Fone Bluetooth" preco="R$ 89,90" imagem={require('../../../assets/images/categoria_esportes.jpg')} />
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