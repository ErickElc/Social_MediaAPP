import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const ContainerSafe = styled.SafeAreaView`
    background-color: #5800FF;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const ContainerLogin = styled.View`
    margin-bottom: 100px;
    margin-top: 100px;
    background-color: whitesmoke;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 50px;
    padding: 30px;
    border: 1px solid #000;
    border-radius: 10px;
`;
export const ContentLogin = styled.View`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;
export const TextoTelasAutenticacao = styled.Text`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
`;