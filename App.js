import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerShown: false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
