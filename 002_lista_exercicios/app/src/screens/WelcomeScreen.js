import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton.js'; 

export default function WelcomeScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.contentContainer}>
        <View style={styles.logoPlaceholder} />
        
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>
          A melhor plataforma para facilitar o seu dia a dia.
        </Text>
      </View>

      <CustomButton 
        title="Começar" 
        onPress={() => onNavigate('proximaTela')} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF',
    paddingHorizontal: 20, 
  },
  contentContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    backgroundColor: '#6C63FF',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});