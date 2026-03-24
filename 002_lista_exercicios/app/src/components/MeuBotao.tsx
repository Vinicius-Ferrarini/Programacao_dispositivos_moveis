import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MeuBotao({ titulo, acao }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={acao} activeOpacity={0.8}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});