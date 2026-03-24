import { StyleSheet, Text, View, Image } from 'react-native';

export default function ItemProduto({ nome, preco, imagem }) {
  return (
    <View style={styles.cardProduto}>
      <Image source={imagem} style={styles.imagemProduto} resizeMode="contain" />
      <Text style={styles.nomeProduto}>{nome}</Text>
      <Text style={styles.precoProduto}>{preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProduto: {
    backgroundColor: '#FFFFFF',
    width: '47%', 
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemProduto: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});