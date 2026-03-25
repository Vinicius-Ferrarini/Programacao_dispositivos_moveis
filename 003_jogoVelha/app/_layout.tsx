import { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  const [tabuleiro, setTabuleiro] = useState(['', '', '', '', '', '', '', '', '']);
  const [jogadorAtual, setJogadorAtual] = useState('X');
  const [vitoriasX, setVitoriasX] = useState(0);
  const [vitoriasO, setVitoriasO] = useState(0);
  const [velhas, setVelhas] = useState(0);

  function marcar(posicao) {
    if (tabuleiro[posicao] !== '') return;
    
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[posicao] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    checarFimDeJogo(novoTabuleiro);
  }

  function checarFimDeJogo(tab) {
    const combinacoes = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (let i = 0; i < combinacoes.length; i++) {
      const [a, b, c] = combinacoes[i];

      if (tab[a] !== '' && tab[a] === tab[b] && tab[a] === tab[c]) {
        
        if (tab[a] === 'X') {
          setVitoriasX(vitoriasX + 1);
        } else {
          setVitoriasO(vitoriasO + 1);
        }
        
        alert(`Fim de jogo! O jogador ${tab[a]} venceu!`);
        resetarJogo();
        return; 
      }
    }

    if (!tab.includes('')) {
      setVelhas(velhas + 1);
      alert('Deu Velha!');
      resetarJogo();
    }
  }

  function resetarJogo() {
    setTabuleiro(['', '', '', '', '', '', '', '', '']);}

  return (
    <View style={styles.container}>
      <View style={styles.jogo}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(0)}>
            <Text style={styles.textoBotao}>{tabuleiro[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(1)}>
            <Text style={styles.textoBotao}>{tabuleiro[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(2)}>
            <Text style={styles.textoBotao}>{tabuleiro[2]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(3)}>
            <Text style={styles.textoBotao}>{tabuleiro[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(4)}>
            <Text style={styles.textoBotao}>{tabuleiro[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(5)}>
            <Text style={styles.textoBotao}>{tabuleiro[5]}</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(6)}>
            <Text style={styles.textoBotao}>{tabuleiro[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(7)}>
            <Text style={styles.textoBotao}>{tabuleiro[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => marcar(8)}>
            <Text style={styles.textoBotao}>{tabuleiro[8]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.placar}>
          <Text style={styles.textoPlacar}>Jogador 1: {vitoriasX}</Text>
          <Text style={styles.textoPlacar}>Jogador 2: {vitoriasO}</Text>
          <Text style={styles.textoPlacar}>Velha:     {velhas}</Text>
        </View>
        <Text style={styles.vez}>Vez do jogador: {jogadorAtual}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  linha: {
    flexDirection: 'row', 
  },
  botao: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  textoBotao: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  placar: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%',
    marginBottom: 20,
  },
  textoPlacar: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vez: {
    fontSize: 20,
    marginBottom: 20,
    color: 'blue',
  },
});