import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
	return (
		<View style={s.header}>
			<Text style={s.logo}>QuliSoft Images</Text>
		</View>
	);
}

const s = StyleSheet.create({
	header: {
		padding: 10,
		width: '100%',
	},
	logo: {
		fontSize: 24,
		textAlign: 'center',
		color: 'lightblue',
	},
});
