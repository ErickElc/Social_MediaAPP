import { useAuth } from '../../auth/auth';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';


// Config
import * as S from './styles';


//libs
import { TextInput, Button } from '@react-native-material/core';
import http from '../../api/api';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default () => {
    const {navigate} = useNavigation();
    const [inputs , setInputs] = useState({
        email: '',
        password: '', 
        cpf: ''
    });
    const submitForm = async() => {
        if(inputs.email === '' || inputs.password === '' || inputs.cpf === ''){
            alert('Preencha todos os campos');
        }
        try {
            const response = await http.put('api/users/recover/password', inputs);
            console.log(response);
            if(response.status === 200){
                alert('Senha Recuperada com sucesso');
                navigate('Login');
            }
        } catch (error) {
            alert('Erro ao fazer login');
        }
    }
    return(
        <LinearGradient
            colors={['rgba(141,5,240,1)', '#66058d', '#db811a']}
        >
            <S.ContainerSafe>
                <S.ContainerLogin>
                    <S.TextoTelasAutenticacao>Recuperar senha</S.TextoTelasAutenticacao>
                    <TextInput 
                        required
                        label="Digite seu email" 
                        variant="outlined"
                        keyboardType='email-address'
                        value={inputs.email}
                        style={{width: '100%', marginBottom: 20, marginTop: 30}} 
                        color="black"
                        fullWidth
                        onChange={(e) => setInputs({...inputs, email: e.nativeEvent.text})}
                    />
                    <TextInput 
                        required
                        label="cpf" 
                        variant="outlined"
                        keyboardType='numeric'
                        value={inputs.cpf}
                        style={{width: '100%', marginBottom: 20}} 
                        color="black"
                        fullWidth
                        maxLength={11}
                        onChange={(e) => setInputs({...inputs, cpf: e.nativeEvent.text})}
                    />
                    <TextInput 
                        required
                        label="Digite sua senha"
                        secureTextEntry={true}
                        keyboardType='hidden-password'
                        variant="outlined"
                        value={inputs.password}
                        style={{width: '100%', marginBottom: 20}} 
                        color="black"
                        fullWidth
                        onChange={(e) => setInputs({...inputs, password: e.nativeEvent.text})}
                    />
                    <Button variant="contained" title="Resetar" tintColor="white" color='blue' style={{width: '100%'}} onPress={submitForm}/>
                    <S.TextH2 onPress={() => navigate('Cadastro')}>Não tem Cadastro?</S.TextH2>
                </S.ContainerLogin>
            </S.ContainerSafe>
        </LinearGradient>
    )
}