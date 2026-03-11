import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // ==========================================
  // PASSO 2: OS ESTADOS (A Memória da Calculadora)
  // ==========================================
  const [numeroAtual, setNumeroAtual] = useState('0'); // O que aparece no visor
  const [numeroAnterior, setNumeroAnterior] = useState<string | null>(null); // O número guardado na memória
  const [operador, setOperador] = useState<string | null>(null); // A operação (+, -, *, /)

  // ==========================================
  // PASSO 3 e 4: FUNÇÕES E LÓGICA DE CÁLCULO
  // ==========================================

  // Função para quando o usuário digita um número
  const lidarComNumero = (numeroDigitado: string) => {
    if (numeroAtual === '0') {
      setNumeroAtual(numeroDigitado); // Substitui o 0 inicial
    } else {
      setNumeroAtual(numeroAtual + numeroDigitado); // Concatena os números (ex: '1' + '5' = '15')
    }
  };

  // Função para quando o usuário escolhe uma operação matemática
  const lidarComOperacao = (operacaoEscolhida: string) => {
    // raiz quadrada é uma operação imediata (não precisa de segundo número)
    if (operacaoEscolhida === '√') {
      const num = parseFloat(numeroAtual);
      const resultado = Math.sqrt(num);
      setNumeroAtual(String(resultado));
      return; // não mexe na memória ou operador
    }

    setOperador(operacaoEscolhida);
    setNumeroAnterior(numeroAtual); // Guarda o número atual na memória
    setNumeroAtual('0'); // Zera o visor para o próximo número
  };

  // Função do botão de Igual (=)
  const calcularResultado = () => {
    if (!numeroAnterior || !operador) return; // Se faltar dados, não faz nada

    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroAtual);
    let resultado = 0;

    // Faz a matemática de verdade baseada no operador escolhido
    switch (operador) {
      case '+': resultado = num1 + num2; break;
      case '-': resultado = num1 - num2; break;
      case '*': resultado = num1 * num2; break;
      case '/': resultado = num1 / num2; break;
      case '^': resultado = Math.pow(num1, num2); break; // expoente
    }

    setNumeroAtual(String(resultado)); // Mostra o resultado no visor (convertido para texto)
    setNumeroAnterior(null); // Limpa a memória
    setOperador(null); // Limpa o operador
  };

  // Função do botão (C) para limpar tudo
  const limparTudo = () => {
    setNumeroAtual('0');
    setNumeroAnterior(null);
    setOperador(null);
  };

  const Botao = ({ titulo, onPress, corFundo }: { titulo: string, onPress: () => void, corFundo?: string }) => (
    <TouchableOpacity 
      style={[styles.botao, { backgroundColor: corFundo || '#333333' }]} 
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Visor da Calculadora */}
      <View style={styles.visorContainer}>
        <Text style={styles.textoVisor}>{numeroAtual}</Text>
      </View>

      {/* Teclado */}
      <View style={styles.tecladoContainer}>
        {/* Linha 1: limpar, raiz, expoente, divisão */}
        <View style={styles.linha}>
          <Botao titulo="C" onPress={limparTudo} corFundo="#a5a5a5" />
          <Botao titulo="√" onPress={() => lidarComOperacao('√')} corFundo="#a5a5a5" />
          <Botao titulo="^" onPress={() => lidarComOperacao('^')} corFundo="#a5a5a5" />
          <Botao titulo="/" onPress={() => lidarComOperacao('/')} corFundo="#ff9f0a" />
        </View>

        {/* Linha 2 */}
        <View style={styles.linha}>
          <Botao titulo="7" onPress={() => lidarComNumero('7')} />
          <Botao titulo="8" onPress={() => lidarComNumero('8')} />
          <Botao titulo="9" onPress={() => lidarComNumero('9')} />
          <Botao titulo="*" onPress={() => lidarComOperacao('*')} corFundo="#ff9f0a" />
        </View>

        {/* Linha 3 */}
        <View style={styles.linha}>
          <Botao titulo="4" onPress={() => lidarComNumero('4')} />
          <Botao titulo="5" onPress={() => lidarComNumero('5')} />
          <Botao titulo="6" onPress={() => lidarComNumero('6')} />
          <Botao titulo="-" onPress={() => lidarComOperacao('-')} corFundo="#ff9f0a" />
        </View>

        {/* Linha 4 */}
        <View style={styles.linha}>
          <Botao titulo="1" onPress={() => lidarComNumero('1')} />
          <Botao titulo="2" onPress={() => lidarComNumero('2')} />
          <Botao titulo="3" onPress={() => lidarComNumero('3')} />
          <Botao titulo="+" onPress={() => lidarComOperacao('+')} corFundo="#ff9f0a" />
        </View>

        {/* Linha 5 */}
        <View style={styles.linha}>
          <Botao titulo="0" onPress={() => lidarComNumero('0')} />
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
    alignItems: 'flex-end',
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