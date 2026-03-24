import { StyleSheet, Text, View, Image } from 'react-native';
import MeuBotao from '../components/MeuBotao';

export default function TelaBoasVindas({ mudarTela }) {
  return (
    <View style={styles.tela}>
      <View style={styles.centro}>
        <Image 
          source={require('../../../assets/images/react-logo.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
        <Text style={styles.titulo}>Bem-vindo</Text>
        <Text style={styles.subtitulo}>O melhor app para o seu dia a dia.</Text>
      </View>

      <MeuBotao titulo="Começar" acao={() => mudarTela('home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'space-between', 
  },
  centro: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});