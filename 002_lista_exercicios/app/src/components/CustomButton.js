
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C63FF', // Cor roxa pedida
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8, // Deixa as bordas arredondadas (Bom UX)
    alignItems: 'center',
    width: '100%', // Ocupa a largura disponível
    marginBottom: 20, // Espaço do rodapé
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});