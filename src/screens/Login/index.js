import { useAuth } from '../../auth/auth';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';


// Config
import * as S from './styles';


//libs
import { TextInput, Button } from '@react-native-material/core';

export default () => {
    const auth = useAuth();
    const [inputs , setInputs] = useState({
        email: '',
        password: ''
    });
    const {navigate} = useNavigation();
    const submitForm = async() => {
        try {
            const loginRequest = await auth.authenticate(inputs.email, inputs.password);
            if(loginRequest === 202){
                alert('login feito com sucesso');
                navigate('Home');
            }
        } catch (error) {
            alert('Erro ao fazer login');
        }
    }
    return(
        <S.ContainerSafe>
            <S.ContainerLogin>
                <S.TextoTelasAutenticacao>Login</S.TextoTelasAutenticacao>
                <TextInput 
                    required
                    label="Digite seu email" 
                    variant="standard"
                    keyboardType='email-address'
                    value={inputs.email}
                    style={{width: '100%', marginBottom: 20, marginTop: 30}} 
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
                    style={{width: '100%', marginBottom: 20}} 
                    color="black"
                    fullWidth
                    onChange={(e) => setInputs({...inputs, password: e.nativeEvent.text})}
                />
                <Button variant="contained" title="Logar" tintColor="white" color='blue' style={{width: '100%'}} onPress={submitForm}/>
                <S.TextH2 onPress={() => navigate('Cadastro')}>Não tem Cadastro?</S.TextH2>
            </S.ContainerLogin>
        </S.ContainerSafe>
    )
}