import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import FullImage from './components/FullImage';
import HomeScreen from './components/HomeScreen';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='Full' component={FullImage} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
