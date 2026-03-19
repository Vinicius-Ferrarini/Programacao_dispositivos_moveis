import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useState} from 'react'

// You can import supported modules from npm

export default function App() {

  const [telaExibida, setTelaExibida] = useState('login')

  function TelaLogin(){
    return (
      <>
        <Text>Voce esta na tela de login</Text>

        <TouchableOpacity onPress={() => setTelaExibida('feed')}>
          <Text> Entrar </Text>
        </TouchableOpacity>
      </>
    )
  }

  function TelaFeed(){
    return (
      <>
        <Text>Voce esta na tela do feed</Text>

        <TouchableOpacity onPress={() => setTelaExibida('login')}>
          <Text> sair </Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <View style={styles.container}>

      {
        telaExibida == 'feed' ? <TelaFeed /> : <TelaLogin />
      }

         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
