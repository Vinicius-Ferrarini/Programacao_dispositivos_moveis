import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuBotao from '../components/MeuBotao';
import ItemCategoria from '../components/ItemCategoria';

export default function TelaHome({ mudarTela }) {
  return (
    <View style={styles.tela}>
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
      <MeuBotao titulo="Voltar" acao={() => mudarTela('boasVindas')} />

    </View>
  );
}

const styles = StyleSheet.create({
  
  tela: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'space-between', 
  },
  
  tituloCategoria: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  areaDoCarrossel: {
    flex: 1, 
    justifyContent: 'center', 
  },

  listaCategorias: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
    paddingHorizontal: 20,
  },
  
});