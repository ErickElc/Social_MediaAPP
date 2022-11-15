import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/Login';
import { AuthProvider, useAuth } from './src/auth/auth';
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home';
import { DataProvider } from './src/context/DataContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const {VerifyLoggin} = useAuth();
  return (
    <AuthProvider>
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={(VerifyLoggin === true) ? 'Home' : 'Login'}
            screenOptions={{
              headerShown: false,
            }}
            >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login"
              component={LoginScreen}
              options={{
                title: '',
                headerShown: false,
                }}
              />
            <Stack.Screen name="Cadastro"
              component={Cadastro}
              options={{
                title: '',
                headerShown: false,
                }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider> 
    </AuthProvider>
  );
}
