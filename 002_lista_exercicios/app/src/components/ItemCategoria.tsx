import { StyleSheet, Text, View,Image} from 'react-native';

export default function ItemCategoria({ nome , imagem }) {
  return (
    <View style={styles.cardCategoria}>
      <Image 
        source={imagem} 
        style={styles.icone} 
        resizeMode="cover"    
      />
      <Text style={styles.textoCategoria}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCategoria: {
    backgroundColor: '#FFFFFF',
    width: 100, 
    borderRadius: 10,
    padding: 10,
    marginRight: 15, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icone: {
    width: 80,       
    height: 80,       
    borderRadius: 40, 
    backgroundColor: '#E0E0E0', 
    marginBottom: 10, 
  },
  textoCategoria: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});