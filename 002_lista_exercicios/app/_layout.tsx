import { StyleSheet, Text, View, TouchableOpacity , Image , ScrollView} from 'react-native';
import { useState } from 'react';

function MeuBotao({ titulo, acao }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={acao} activeOpacity={0.8}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

function ItemCategoria({ nome }) {
  return (
    <View style={styles.cardCategoria}>
      <View style={styles.iconePlaceholder} />
      <Text style={styles.textoCategoria}>{nome}</Text>
    </View>
  );
}

function TelaBoasVindas({ mudarTela }) {
  return (
    <View style={styles.tela}>
      
      <View style={styles.centro}>
        <Image 
            source={require('../assets/images/react-logo.png')} 
            style={styles.logo} 
            resizeMode="contain" 
        />
        <Text style={styles.titulo}>Bem-vindo</Text>
        <Text style={styles.subtitulo}>O melhor app para o seu dia a dia.</Text>
      </View>

      <MeuBotao titulo="Começar" acao={() => mudarTela('feed')} />
      
    </View>
  );
}

function TelaHome({ mudarTela }) {
  return (
    <View style={styles.telaSecundaria}>
      <Text style={styles.tituloSecundario}>Categorias</Text>

      {/* ScrollView horizontal para a lista rolar para o lado */}
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} // Esconde a barrinha de rolagem (Bom UX)
        style={styles.listaCategorias}
      >
        {/* Chamando o nosso componente várias vezes com nomes diferentes */}
        <ItemCategoria nome="Eletrônicos" />
        <ItemCategoria nome="Roupas" />
        <ItemCategoria nome="Casa" />
        <ItemCategoria nome="Livros" />
        <ItemCategoria nome="Esportes" />
      </ScrollView>

      {/* Botão para voltar e não ficarmos presos nessa tela */}
      <MeuBotao titulo="Voltar" acao={() => mudarTela('boasVindas')} />
    </View>
  );
}


export default function App() {
  const [telaExibida, setTelaExibida] = useState('boasVindas');

  return (
    <View style={styles.container}>
      {telaExibida === 'boasVindas' ? (
        <TelaBoasVindas mudarTela={setTelaExibida} />
      ) : (
        <TelaHome mudarTela={setTelaExibida} />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'space-between', 
  },
  centro: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
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
// --- NOVOS ESTILOS DO EXERCÍCIO 2 ---
  telaSecundaria: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Cor de fundo pedida no exercício
    padding: 20,
    paddingTop: 50, // Dá um espaço do topo da tela do celular
    justifyContent: 'space-between',
  },
  tituloSecundario: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  listaCategorias: {
    maxHeight: 120, // Limita a altura da área de rolagem para não empurrar tudo
  },
  cardCategoria: {
    backgroundColor: '#FFFFFF',
    width: 100, // Tamanho uniforme que o exercício pediu
    height: 100,
    borderRadius: 10,
    padding: 10,
    marginRight: 15, // Espaçamento entre os itens
    alignItems: 'center',
    justifyContent: 'center',
    // Uma sombrinha leve para destacar o card branco no fundo cinza (UX)
    elevation: 2, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0', // Cinza clarinho
    marginBottom: 10,
  },
  textoCategoria: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});

