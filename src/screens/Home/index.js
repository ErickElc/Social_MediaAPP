import { useEffect, useState } from 'react'
import { BackHandler, Image } from 'react-native';
import http from '../../api/api'
import * as S from './styles'

import Icon from '@expo/vector-icons/FontAwesome5';
import { useDataContext } from '../../context/DataContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';

export default () => {
    const {navigate} = useNavigation();
    const [postData, setPostData] = useState([]);
    const {userData} = useDataContext();
    useEffect(()=> {
        BackHandler.addEventListener('backPress', () => true)
        http.get('api/posts/list/all')
        .then((res) => {
            const data = (res.data).reverse();
            setPostData(data);
        })
        .catch((error) => {
            console.log(error)
        })
        return () => BackHandler.removeEventListener('backPress', () => true)
    },[])
    return (
        <S.ContainerSafe>
            <S.ContainerHeader>
                <LinearGradient
                    colors={['rgba(141,5,240,1)', 'rgba(79,0,176,1)', 'rgba(103,0,119,1)']}
                    style={{marginBottom: 30, borderRadius: 0, padding: 10, marginTop: 0}}
                >
                    <S.TextH1>WorkMedia</S.TextH1>
                </LinearGradient>
            </S.ContainerHeader>
            <S.ScrowView>
                <S.ContainerMain>
                    <LinearGradient
                        colors={['rgba(141,5,240,1)', 'rgba(79,0,176,1)', 'rgba(103,0,119,1)']}
                        style={{margin: 0, width: 290, borderRadius: 10}}
                    >
                        <S.PerfilCard>
                            <Button 
                                variant="contained" 
                                title="Perfil" 
                                tintColor="white" color='#000' 
                                style={{width: '40%', alignSelf: 'flex-start'}} 
                                onPress={() => 
                                    navigate('Profile', {
                                    id: userData?._id,
                                    name: userData.name,
                                    email: userData.email,
                                    avatar: userData?.avatar
                            })}/>
                                {(!userData?.avatar) ? <Icon name="user-circle" size={80} style={{marginTop: 20}} color="#000" /> :
                                    <Image source={{uri: userData?.avatar}} style={{width: 100, height: 100, borderRadius: 100 }}/>
                                }
                                <S.PerfilCardText>{userData?.name}</S.PerfilCardText>
                        </S.PerfilCard>
                    </LinearGradient>
                        {postData?.map((item) => (
                            <S.PostData key={item?._id}>
                                <S.PostHeader onPress={() => {navigate('Profile',{
                                    id: item?.autor?._id,
                                    name: item?.autor?.name,
                                    email: item?.autor?.email,
                                    avatar: item?.autor?.avatar
                                })}}>
                                    {(!item?.autor?.avatar) ? <Icon name="user-circle" size={40} color="#000" /> :
                                        <S.ContainerIcon>
                                            <Image source={{uri: item?.autor?.avatar}} style={{width: 50, height: 50, borderRadius: 100}}/>
                                        </S.ContainerIcon>
                                    }
                                    <S.PostHeaderText>{item?.autor?.name}</S.PostHeaderText>
                                </S.PostHeader>
                                <S.TextH2>{item?.content}</S.TextH2>
                                {(item.image_url) ? <Image source={{uri: `${item.image_url}`}} style={{width: 250, height: 250}}/> : null}
                            </S.PostData>
                        ))}
                </S.ContainerMain>
            </S.ScrowView>
        </S.ContainerSafe>
    )
}