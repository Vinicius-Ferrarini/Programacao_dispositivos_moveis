import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [numeroAtual, setNumeroAtual] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [limparTela, setLimparTela] = useState(false);
  const COR_OPERADOR = '#ff9f0a';
  const COR_FUNCAO = '#a5a5a5';
  const COR_NUMERO = '#333333';
  

  const lidarComNumero = (numeroDigitado) => {
    if (numeroAtual === '0' || limparTela) {
      setNumeroAtual(numeroDigitado);
      setLimparTela(false);
    } else {
      setNumeroAtual(numeroAtual + numeroDigitado);
    }
  };

  const lidarComOperacao = (operacaoEscolhida) => {
    if (operacaoEscolhida === '√') {
      const num = parseFloat(numeroAtual);
      setNumeroAtual(String(Math.sqrt(num)));
      setLimparTela(true);
      return;
    }
    setOperador(operacaoEscolhida);
    setNumeroAnterior(numeroAtual);
    setLimparTela(true);
  };

  const lidarComVirgula = () => {
    if (limparTela) {
      setNumeroAtual('0.');
      setLimparTela(false);
      return;
    }

    if (!numeroAtual.includes('.')) {
      setNumeroAtual(numeroAtual + '.');
    }
  };

  const calcularResultado = () => {
    if (!numeroAnterior || !operador) return;

    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroAtual);
    let resultado = 0;

    switch (operador) {
      case '+': resultado = num1 + num2; break;
      case '-': resultado = num1 - num2; break;
      case '*': resultado = num1 * num2; break;
      case '/': resultado = num1 / num2; break;
      case '^': resultado = Math.pow(num1, num2); break;
    }

    setNumeroAtual(String(resultado));
    setNumeroAnterior(null);
    setOperador(null);
    setLimparTela(true);
  };

  const limparTudo = () => {
    setNumeroAtual('0');
    setNumeroAnterior(null);
    setOperador(null);
    setLimparTela(false);
  };

  const Botao = ({ titulo, onPress, corFundo }) => (
    <TouchableOpacity 
      style={[styles.botao, { backgroundColor: corFundo || '#333333' }]} 
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );

  const layoutTeclado = [
    [
      { titulo: 'C', onPress: limparTudo, cor: COR_FUNCAO },
      { titulo: '√', onPress: () => lidarComOperacao('√'), cor: COR_FUNCAO },
      { titulo: '^', onPress: () => lidarComOperacao('^'), cor: COR_FUNCAO },
      { titulo: '/', onPress: () => lidarComOperacao('/'), cor: COR_OPERADOR },
      
    ],
    [
      { titulo: '7', onPress: () => lidarComNumero('7') },
      { titulo: '8', onPress: () => lidarComNumero('8') },
      { titulo: '9', onPress: () => lidarComNumero('9') },
      { titulo: '*', onPress: () => lidarComOperacao('*'), cor: COR_OPERADOR },
    ],
    [
      { titulo: '4', onPress: () => lidarComNumero('4') },
      { titulo: '5', onPress: () => lidarComNumero('5') },
      { titulo: '6', onPress: () => lidarComNumero('6') },
      { titulo: '-', onPress: () => lidarComOperacao('-'), cor: COR_OPERADOR },
    ],
    [
      { titulo: '1', onPress: () => lidarComNumero('1') },
      { titulo: '2', onPress: () => lidarComNumero('2') },
      { titulo: '3', onPress: () => lidarComNumero('3') },
      { titulo: '+', onPress: () => lidarComOperacao('+'), cor: COR_OPERADOR },
    ],
    [
      { titulo: '0', onPress: () => lidarComNumero('0') },
      { titulo: '00', onPress: () => lidarComNumero('00') },
      { titulo: ',', onPress: lidarComVirgula },
      { titulo: '=', onPress: calcularResultado, cor: COR_OPERADOR },
    ],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.visorContainer}>
        <Text style={styles.textoVisor} numberOfLines={1} adjustsFontSizeToFit>
          {numeroAtual}
        </Text>
      </View>

      <View style={styles.tecladoContainer}>
        {layoutTeclado.map((objetoDaLinha, indexLinha) => ( //objetoDaLinha ['7', '8', '9', '*'] |indexLinha 0, 1, 2, 3, 4  
          <View key={indexLinha} style={styles.linha}>
            {objetoDaLinha.map((btn) => (
              <Botao 
                key={btn.titulo}
                titulo={btn.titulo} 
                onPress={btn.onPress} 
                corFundo={btn.cor} 
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
    justifyContent: 'flex-end',
  },
visorContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minHeight: 150, 
    marginTop: 50,
},  
  textoVisor: {
    fontSize: 70,
    color: '#ffffff',
    fontWeight: '300',
  },
  tecladoContainer: {
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  linha: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  botao: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  textoBotao: {
    fontSize: 32,
    color: '#ffffff',
  },
});