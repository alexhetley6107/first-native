import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	ActivityIndicator,
	RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages } from '../redux/fetchImages';

import Header from './Header';
import ImgItem from './ImgItem';

export default function HomeScreen({ navigation }) {
	const { items, isLoading, success } = useSelector((state) => state.image);

	const dispatch = useDispatch();

	const handleFetch = () => {
		dispatch(fetchImages());
	};

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<SafeAreaView style={s.container}>
			<Header />
			{isLoading ? (
				<View style={s.wrap}>
					<ActivityIndicator size='large' />
				</View>
			) : success ? (
				<FlatList
					data={items}
					keyExtractor={(i) => i.id}
					renderItem={({ item }) => <ImgItem {...item} nav={navigation} />}
					columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
					numColumns={2}
					refreshControl={<RefreshControl onRefresh={handleFetch} />}
				/>
			) : (
				<View style={s.wrap}>
					<Text style={s.error}>You don't deserve to see the pictures</Text>
				</View>
			)}
			<StatusBar style='black' theme='dark' />
		</SafeAreaView>
	);
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		padding: 10,
	},
	wrap: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	error: {
		fontSize: 24,
		textAlign: 'center',
		color: 'blue',
	},
});
