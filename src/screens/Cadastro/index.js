import {useState} from 'react';
import * as S from './styles';
import { TextInput, Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import http from '../../api/api';
import { LinearGradient } from 'expo-linear-gradient';
export default () => {
    const {navigate} = useNavigation();
    const [inputs , setInputs] = useState({
        name: '',
        age: '', 
        cpf: '',
        email: '',
        password: ''
    });
    const submitForm = async() => {
        try {
            const registerUser = await http.post('api/users/cadastrar',{
                name: inputs.name,
                age: inputs.age,
                cpf: inputs.cpf,
                email: inputs.email,
                password: inputs.password
            })
            if(registerUser.status === 201){
                alert('Usuário criado com sucesso!')
                navigate('Login')
            }
        } catch (error) {
            alert('Esse e-mail já foi cadastrado!');
            console.log(error)
        }
    }
    return(
        <LinearGradient
            colors={['rgba(141,5,240,1)', '#66058d', '#db811a']}
        >

            <S.ContainerSafe>
                <S.ContainerLogin>
                    <S.TextoTelasAutenticacao>Cadastro</S.TextoTelasAutenticacao>
                    <S.Scroller showsVerticalScrollIndicator={false}>
                        <TextInput 
                            required
                            label="Digite seu nome" 
                            variant="outlined"
                            keyboardType='default'
                            value={inputs.name}
                            style={{width: '100%', marginBottom: 20}} 
                            color="black"
                            fullWidth
                            onChange={(e) => setInputs({...inputs, name: e.nativeEvent.text})}
                        />
                        <TextInput 
                            required
                            label="Digite seu idade" 
                            variant="outlined"
                            keyboardType='default'
                            value={inputs.age}
                            style={{width: '100%', marginBottom: 20}} 
                            color="black"
                            fullWidth
                            onChange={(e) => setInputs({...inputs, age: e.nativeEvent.text})}
                        />
                        <TextInput 
                            required
                            label="Digite seu CPF" 
                            variant="outlined"
                            keyboardType='default'
                            value={inputs.cpf}
                            style={{width: '100%', marginBottom: 20}} 
                            color="black"
                            fullWidth
                            onChange={(e) => setInputs({...inputs, cpf: e.nativeEvent.text})}
                        />
                        <TextInput 
                            required
                            label="Digite seu email" 
                            variant="outlined"
                            keyboardType='email-address'
                            value={inputs.email}
                            style={{width: '100%', marginBottom: 20}} 
                            color="black"
                            fullWidth
                            onChange={(e) => setInputs({...inputs, email: e.nativeEvent.text})}
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
                    </S.Scroller>
                    <Button variant="contained" title="Cadastrar" tintColor="white" color='blue' style={{width: '100%'}} onPress={submitForm}/>
                    <S.TextH2 onPress={() => navigate('Login')}>Já tem Cadastro?</S.TextH2>
                </S.ContainerLogin>
            </S.ContainerSafe>
        </LinearGradient>
    )
}