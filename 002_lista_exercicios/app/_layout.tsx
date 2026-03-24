import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import TelaBoasVindas from './src/screens/TelaBoasVindas';
import TelaHome from './src/screens/TelaHome';            

export default function App() {
  const [telaExibida, setTelaExibida] = useState('boasVindas');

  return (
    <View style={styles.container}>
      {telaExibida === 'boasVindas' ? 
        ( <TelaBoasVindas mudarTela={setTelaExibida} /> ) :
        ( <TelaHome       mudarTela={setTelaExibida} /> ) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});