import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {useState} from 'react'


export default function App() {
  const [visor,setVisor] = useState(0);
  const [operacao,setOperacao] = useState('');
  const [numeroAnterior,setNumeroAnterior] = useState('');

  function lidarNumero(numero){
    if(visor==0) setVisor(numero);
    else setVisor(visor + String(numero) )
  }

  function lidarOperacao(operacao){

    if (visor !=0 && operacao != '' && numeroAnterior != 0) {lidarIgual()}

    if(operacao == '+') setOperacao('+');
    else if(operacao == '-') setOperacao('-');
    else if(operacao == 'X') setOperacao('X');
    else setOperacao('/');

    
    if(numeroAnterior==0){
      setNumeroAnterior(visor);
      setVisor(0)
    }
  }

  function zerarCalculadora(){
    setVisor(0)
    setNumeroAnterior('')
    setOperacao('')
  }

  function lidarIgual(){  
    if(operacao == '+') setVisor(numeroAnterior+visor);
    else if(operacao == '-') setVisor(numeroAnterior-visor);
    else if(operacao == 'X') setVisor(numeroAnterior*visor);
    else if(operacao == '/') setVisor(numeroAnterior/visor);

    setNumeroAnterior('')
    setOperacao('')

  }

  return (
    <View style={styles.tela}>
      <View style={styles.visor}>
        <Text style={styles.textoVisor} adjustsFontSizeToFit={true}>{visor}</Text>
        <Text style={styles.numeroAnterior} adjustsFontSizeToFit={true}>{numeroAnterior}{operacao}</Text>
      </View>
      <View style={styles.botoes}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisor(Math.sqrt(visor))}>²√</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => setVisor(visor*visor)}>x²</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => setVisor('')}>⌫</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => zerarCalculadora()}>C</TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(7)}>7</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(8)}>8</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(9)}>9</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarOperacao('X')}>*</TouchableOpacity>

        </View>
         <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(4)}>4</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(5)}>5</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(6)}>6</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarOperacao('-')}>-</TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(1)}>1</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(2)}>2</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(3)}>3</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarOperacao('+')}>+</TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero(0)}>0</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarNumero('.')}>.</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarOperacao('/')}>/</TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => lidarIgual()}>=</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  visor:{
    flex:0.3,
    alignItems: 'flex-end',
    marginRight:10,
  },
  textoVisor:{
    fontSize:30,
    fontWeight: 'bold',
  },
  botoes:{
    flex:1,
  },
  botao:{
    flex:1,
    borderWidth:1,
    padding:2,
    margin:2,
    alignItems: 'center',
    backgroundColor:'#C4C4C4'  },
  linha:{
    flex:0.18,
    flexDirection:'row',
  },
  numeroAnterior:{

  }
});
