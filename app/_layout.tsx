import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RootLayout() {
	const [contador, setContador] = useState(0);

	function adicionarMaisUm(){
		setContador(contador + 1)
	}

	return (
		<>
			<Text style={{ fontSize: 20, alignSelf: 'center' }}>Contador: {contador} </Text>

			<TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>Clique + 1</Text>
			</TouchableOpacity>


		</>
	);
}

const styles = StyleSheet.create({
	botao:{
		backgroundColor: '#ffaaff',
		marginHorizontal: 10,
		padding: 20,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	}
});