import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [numeroAtual, setNumeroAtual] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [limparTela, setLimparTela] = useState(false);

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
    // Se a tela for limpa (depois de um operador), começamos com '0.'
    if (limparTela) {
      setNumeroAtual('0.');
      setLimparTela(false);
      return;
    }

    // Só adiciona a vírgula se o número atual ainda não tiver uma
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

  return (
    <View style={styles.container}>
      <View style={styles.visorContainer}>
        <Text style={styles.textoVisor}>{numeroAtual}</Text>
      </View>

      <View style={styles.tecladoContainer}>
        <View style={styles.linha}>
          <Botao titulo="C" onPress={limparTudo} corFundo="#a5a5a5" />
          <Botao titulo="√" onPress={() => lidarComOperacao('√')} corFundo="#a5a5a5" />
          <Botao titulo="^" onPress={() => lidarComOperacao('^')} corFundo="#a5a5a5" />
          <Botao titulo="/" onPress={() => lidarComOperacao('/')} corFundo="#ff9f0a" />
        </View>

        <View style={styles.linha}>
          <Botao titulo="7" onPress={() => lidarComNumero('7')} />
          <Botao titulo="8" onPress={() => lidarComNumero('8')} />
          <Botao titulo="9" onPress={() => lidarComNumero('9')} />
          <Botao titulo="*" onPress={() => lidarComOperacao('*')} corFundo="#ff9f0a" />
        </View>

        <View style={styles.linha}>
          <Botao titulo="4" onPress={() => lidarComNumero('4')} />
          <Botao titulo="5" onPress={() => lidarComNumero('5')} />
          <Botao titulo="6" onPress={() => lidarComNumero('6')} />
          <Botao titulo="-" onPress={() => lidarComOperacao('-')} corFundo="#ff9f0a" />
        </View>

        <View style={styles.linha}>
          <Botao titulo="1" onPress={() => lidarComNumero('1')} />
          <Botao titulo="2" onPress={() => lidarComNumero('2')} />
          <Botao titulo="3" onPress={() => lidarComNumero('3')} />
          <Botao titulo="+" onPress={() => lidarComOperacao('+')} corFundo="#ff9f0a" />
        </View>

        <View style={styles.linha}>
          <Botao titulo="0" onPress={() => lidarComNumero('0')} />
          <Botao titulo="00" onPress={() => lidarComNumero('00')} />
          <Botao titulo="," onPress={lidarComVirgula} />
          <Botao titulo="=" onPress={calcularResultado} corFundo="#ff9f0a" />
        </View>
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