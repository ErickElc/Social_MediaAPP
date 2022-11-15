import { useEffect, useState } from 'react'
import { Image } from 'react-native';
import http from '../../api/api'
import * as S from './styles'

import Icon from '@expo/vector-icons/FontAwesome5';
import { useDataContext } from '../../context/DataContext';
import { LinearGradient } from 'expo-linear-gradient';

export default () => {
    const [postData, setPostData] = useState([]);
    const {userData} = useDataContext();
    useEffect(()=> {
        http.get('api/posts/list/all')
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
            </S.ContainerHeader>
            <S.ScrowView showsVerticalScrollIndicator={false}>
                <S.ContainerMain>
                    <LinearGradient
                        colors={['rgba(141,5,240,1)', 'rgba(79,0,176,1)', 'rgba(103,0,119,1)']}
                        style={{margin: 0, width: 290, borderRadius: 10}}
                    >
                        <S.PerfilCard>
                            {(!userData?.avatar) ? <Icon name="user-circle" size={30} color="#000" /> :
                                <Image source={{uri: userData?.avatar}} style={{width: 100, height: 100, borderRadius: 100 }}/>
                            }
                            <S.PerfilCardText>{userData?.name}</S.PerfilCardText>
                        </S.PerfilCard>
                    </LinearGradient>
                        {postData?.map((item) => (
                            <S.PostData key={item.id}>
                                <S.PostHeader>
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