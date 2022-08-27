import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

export default function FullImage({ route, navigation }) {
	console.log(route.params);
	return (
		<TouchableOpacity style={s.item} onPress={() => navigation.navigate('Home')}>
			<Image
				style={s.img}
				source={{
					uri: route.params,
				}}
			/>
		</TouchableOpacity>
	);
}

const s = StyleSheet.create({
	item: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: '100%',
		height: '100%',
	},
});
