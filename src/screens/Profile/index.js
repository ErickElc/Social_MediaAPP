import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import http from '../../api/api';
import * as S from './styles';

import Icon from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-native-material/core';
import { useDataContext } from '../../context/DataContext';

export default ({route}) => {
    const user = useDataContext();
    const {id, avatar, name, email} = route.params;
    const {navigate, goBack} = useNavigation();
    const [postData, setPostData] = useState([]);
    useEffect(()=> {
        http.get(`api/posts/list/user/${id}`)
        .then((res) => {
            setPostData((res.data).reverse())
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    return (
        <S.ContainerSafe>
            <S.ContainerHeader>
                <>
                    <S.ContainerButton onPress={() => goBack()}>
                        <S.TextButton>Voltar</S.TextButton>
                    </S.ContainerButton>
                    <LinearGradient
                        colors={['rgba(141,5,240,1)', 'rgba(79,0,176,1)', 'rgba(103,0,119,1)']}
                        style={{marginBottom: 30, borderRadius: 0, padding: 10, marginTop: 0}}
                    >
                        <S.TextH1>WorkMedia</S.TextH1>
                    </LinearGradient>
                    <S.ContainerButton style={{opacity: 0}}>
                        <S.TextButton>Voltar</S.TextButton>
                    </S.ContainerButton>
                </>
            </S.ContainerHeader>
    
            <S.ScrowView showsVerticalScrollIndicator={false}>
                <S.ContainerMain>
                    <LinearGradient
                        colors={['rgba(141,5,240,1)', 'rgba(79,0,176,1)', 'rgba(103,0,119,1)']}
                        style={{margin: 0, width: 290, borderRadius: 10}}
                    >
                        <S.PerfilCard>
                            {(!avatar) ? <Icon name="user-circle" size={80} style={{marginTop: 20}} color="#000" /> :
                                <Image source={{uri: avatar}} style={{width: 100, height: 100, borderRadius: 100 }}/>
                            }
                            <S.PerfilCardText >{name}</S.PerfilCardText>
                            {(email === user?.userData.email) ?
                                <Button 
                                    variant="contained" 
                                    title="Editar" 
                                    tintColor="white" color='#000' 
                                    style={{width: '40%', marginBottom: 50}} 
                                    onPress={() => 
                                        navigate('Config', { 
                                            id: id,
                                            email: email,
                                            name: name
                                        })
                                    }/>: null
                            }
                        </S.PerfilCard>
                    </LinearGradient>
                        {postData?.map((item) => (
                            <S.PostData key={item._id}>
                                <S.PostHeader>
                                    {(!item?.autor?.avatar) ? <Icon name="user-circle" size={40} color="#000" /> :
                                        <S.ContainerIcon>
                                            <Image source={{uri: item?.autor?.avatar}} style={{width: 50, height: 50, borderRadius: 100}}/>
                                        </S.ContainerIcon>
                                    }
                                    <S.PostHeaderText>{item?.autor?.name}</S.PostHeaderText>
                                </S.PostHeader>
                                <S.TextH3>{item?.content}</S.TextH3>
                                {(item.image_url) ? <Image source={{uri: `${item.image_url}`}} style={{width: 250, height: 250}}/> : null}
                            </S.PostData>
                        ))}
                        {(postData.length === 0) ? <S.TextH2>Nenhum post encontrado</S.TextH2> : null}
                </S.ContainerMain>
            </S.ScrowView>
        </S.ContainerSafe>
    )
}