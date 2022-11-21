import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import { DataProvider } from './src/context/DataContext';
import { AuthProvider, useAuth } from './src/auth/auth';
import ResetPassword from './src/screens/ResetPassword';
import LoginScreen from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Config from './src/screens/Config';

const Stack = createNativeStackNavigator();
// {(VerifyLoggin === true) ? 'Home' : 'Login'}
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
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Config" component={Config}/>
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider> 
    </AuthProvider>
  );
}
