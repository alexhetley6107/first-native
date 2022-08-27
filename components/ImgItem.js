import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

export default function ImgItem({ author, img, nav }) {
	return (
		<TouchableOpacity style={s.item} onPress={() => nav.navigate('Full', img)}>
			<Image style={s.img} source={{ uri: img }} />
			<Text style={s.made}>Made by</Text>
			<Text style={s.text}>{author}</Text>
		</TouchableOpacity>
	);
}

const s = StyleSheet.create({
	item: {
		width: '45%',
		marginBottom: 5,
	},
	img: {
		width: '100%',
		height: 200,
	},
	text: {
		textAlign: 'center',
	},
	made: {
		textAlign: 'center',
		fontSize: 10,
	},
});
