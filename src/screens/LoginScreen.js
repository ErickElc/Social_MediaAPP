import { TextInput, Button } from '@react-native-material/core';
import {useState} from 'react';
import { View, Text, SafeAreaView} from 'react-native'
import { ContainerLogin, ContainerSafe, ContentLogin, TextoTelasAutenticacao } from '../styles/components';
export default function LoginScreen(){
    const [inputs , setInputs] = useState({
        email: '',
        password: ''
    });
    const submitForm = async() => {
        try {

        } catch (error) {
            
        }
    }
    return(
        <ContainerSafe>
            <ContainerLogin>
                <TextoTelasAutenticacao>Login</TextoTelasAutenticacao>
                <TextInput 
                    required
                    label="Digite seu email" 
                    variant="standard"
                    keyboardType='email-address'
                    value={inputs.email}
                    style={{width: '100%', marginBottom: 10}} 
                    color="black"
                    fullWidth
                    onChange={(e) => setInputs({...inputs, email: e.nativeEvent.text})}
                />
                <TextInput 
                    required
                    label="Digite sua senha"
                    secureTextEntry={true}
                    keyboardType='hidden-password'
                    variant="standard"
                    value={inputs.password}
                    style={{width: '100%', marginBottom: 10}} 
                    color="black"
                    fullWidth
                    onChange={(e) => setInputs({...inputs, password: e.nativeEvent.text})}
                />
                <Button variant="contained" title="Logar" tintColor="white" color='blue' style={{width: '100%'}}/>
            </ContainerLogin>
        </ContainerSafe>
    )
}