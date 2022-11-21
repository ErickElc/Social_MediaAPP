import { Button, TextInput } from '@react-native-material/core';
import { useDataContext } from '../../context/DataContext';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import http from '../../api/api';
import  * as S from './styles';
import { useAuth } from '../../auth/auth';

export default ({route}) => {
    const user = useAuth();
    const {id, name, email} = route.params;
    const {navigate , goBack} = useNavigation();
    const [data, setData] = useState();
    const [edit, setEdit] = useState(false);
    const [inputs , setInputs] = useState({
        name:'',
        age: '',
        email: '',
        cpf: '',
    });
    const [habilitado, setHabilitado] = useState()
    async function PegarDados() {
        alert("Carregando Dados...")
        http.get(`api/users/${id}`).then((response) => {
            if (response.data !== null) {
                setInputs({
                    name: response.data.name,
                    age: JSON.stringify(response.data.age),
                    email: response.data.email,
                    cpf: response.data.cpf,
                });
                setHabilitado(response.data.habilitado)
                setData({
                    name: response.data.name,
                    age: JSON.stringify(response.data.age),
                    email: response.data.email,
                    cpf: response.data.cpf,
                });
            }
        } ).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        PegarDados();
    },[]);
    const submit = async () => {
        if( data.name === inputs.name
            && data.age === inputs.age
            && data.email === inputs.email
            && data.cpf === inputs.cpf
            && data.habilitado === inputs.habilitado){
            return alert('Nenhuma alteração foi feita')
        }
        alert('Salvando alterações...')
        try {
            const request = await http.put(`api/users/update/${id}`, {
                name: inputs.name,
                age: inputs.age,
                email: inputs.email,
                cpf: inputs.cpf,
                habilitado: inputs.habilitado,
                token: user?.user?.token
            })
            // console.log(request)
            if(request.status === 200) {
                alert('Dados atualizados com sucesso!');
            }
        } catch (error) {
            console.log(error);
        }   
    };
    return(
        <S.ContainerSafe>
            <S.ContainerHeader>
                <S.ContainerButton onPress={() => goBack()}>
                    <S.TextButton>Voltar</S.TextButton>
                </S.ContainerButton>
            </S.ContainerHeader>
            <S.ContainerMain>
                {
                    (!edit) ? (
                        <Button 
                            variant="contained"
                            title="Editar" 
                            tintColor="white" color='#0014FF' 
                            style={{width: '80%', marginBottom: 50, border: 1, borderStyle: 'solid', borderColor: '#009EFF'}}
                                onPress={() => {
                                setEdit(!edit);
                            }
                            }
                        />
                    ) :
                    (
                        <Button 
                            variant="contained" 
                            title="Salvar" 

                            tintColor="white" color='#009EFF' 
                            style={{width: '80%', marginBottom: 50}} 
                            onPress={() => {
                                setEdit(!edit);
                                submit();    
                            
                            }}
                        />
                    )
                }
                <S.ContainerInputs>
                {
                    (edit) ? (
                        <>
                            <S.TextH2>Nome*</S.TextH2>
                            <TextInput 
                                editable={true}
                                label="" 
                                variant="outlined"
                                keyboardType='default'
                                value={inputs.name}
                                style={{width: '100%', marginBottom: 20}} 
                                color="black"
                                fullWidth
                                onChange={(e) => setInputs({...inputs, name: e.nativeEvent.text})}
                            />
                            <S.TextH2>Idade*</S.TextH2>
                            <TextInput 
                                editable={true}
                                variant="outlined"
                                keyboardType='numeric'
                                value={inputs.age}
                                style={{width: '100%', marginBottom: 20}} 
                                color="black"
                                fullWidth
                                onChange={(e) => setInputs({...inputs, age: e.nativeEvent.text})}
                            />
                            <S.TextH2>Cpf*</S.TextH2>
                            <TextInput 
                                editable={true}
                                label="" 
                                variant="outlined"
                                keyboardType='numeric'
                                value={inputs.cpf}
                                maxLength={11}
                                style={{width: '100%', marginBottom: 20}} 
                                color="black"
                                fullWidth
                                onChange={(e) => setInputs({...inputs, cpf: e.nativeEvent.text})}
                            />
                            <S.TextH2>Email*</S.TextH2>
                            <TextInput 
                                editable={true}
                                label="" 
                                variant="outlined"
                                keyboardType='email-address'
                                value={inputs.email}
                                style={{width: '100%', marginBottom: 20}} 
                                color="black"
                                fullWidth
                                onChange={(e) => setInputs({...inputs, email: e.nativeEvent.text})}
                            />
                            <Picker
                                selectedValue={habilitado}
                                onValueChange={(itemValue, itemIndex) =>{
                                    setHabilitado(itemValue);
                                }}>
                                <Picker.Item label="Habilitado" value={true} />
                                <Picker.Item label="Desabilitado" value={false} />
                            </Picker>
                        </>
                            ) : (
                                <>
                            <S.TextH2>Nome*</S.TextH2>
                            <TextInput 
                                editable={false}
                                label="" 
                                inputStyle={{color: 'gray'}}
                                variant="outlined"
                                keyboardType='default'
                                value={inputs.name}
                                style={{width: '100%', marginBottom: 20, color: 'gray'}} 
                                color="gray"
                                fullWidth
                                onChange={(e) => setInputs({...inputs, name: e.nativeEvent.text})}
                                />
                            <S.TextH2>Idade</S.TextH2>
                            <TextInput 
                                editable={false}
                                label="" 
                                inputStyle={{color: 'gray'}}
                                variant="outlined"
                                keyboardType='numeric'
                                value={inputs.age}
                                style={{width: '100%', marginBottom: 20}} 
                                fullWidth
                                onChange={(e) => setInputs({...inputs, email: e.nativeEvent.text})}
                                />
                            <S.TextH2>Cpf*</S.TextH2>
                            <TextInput 
                                editable={false}
                                label="" 
                                inputStyle={{color: 'gray'}}
                                color='#65647C'
                                variant="outlined"
                                keyboardType='numeric'
                                value={inputs.cpf}
                                maxLength={11}
                                style={{width: '100%', marginBottom: 20}} 
                                fullWidth
                                onChange={(e) => setInputs({...inputs, cpf: e.nativeEvent.text})}
                                />
                            <S.TextH2>Email*</S.TextH2>
                            <TextInput 
                                editable={false}
                                label="" 
                                inputStyle={{color: 'gray'}}
                                variant="outlined"
                                keyboardType='email-address'
                                value={inputs.email}
                                style={{width: '100%', marginBottom: 20}} 
                                color="black"
                                fullWidth
                                onChange={(e) => setInputs({...inputs, email: e.nativeEvent.text})}
                            />
                            <Picker
                                enabled={false}
                                style={{color: "#65647C",}}
                                selectedValue={habilitado}
                                onValueChange={(itemValue, itemIndex) =>{
                                    setHabilitado(itemValue);
                                }}>
                                <Picker.Item label="Habilitado" value={true} />
                                <Picker.Item label="Desabilitado" value={false} />
                            </Picker>
                        </>
                    )
                }
                
                </S.ContainerInputs>
            </S.ContainerMain>
        </S.ContainerSafe>
    );
}