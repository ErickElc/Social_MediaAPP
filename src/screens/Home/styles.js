import { Colors } from "../../config/Colors";
import styled from "styled-components/native";




export const ContainerSafe = styled.SafeAreaView`
    display: flex;
    margin-top: 100px;
    flex-flow: column-reverse wrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /* width: 100%; */
`;
export const ScrowView = styled.ScrollView`
    flex: 1;
    width: 100%;
    height: 100%;
    flex-flow: column-reverse;
`;
export const ContainerHeader = styled.View`

`;
export const PerfilCard = styled.View`
    width: 290px;
    height: 200px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-between;
    /* border: solid black; */
    border-radius: 10px;
    margin-top: 10px;
    /* border-width: 1px; */
`;
export const PerfilCardText = styled.Text`
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
`;
export const ContainerMain  = styled.View`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;

    margin-bottom: 300px;
`;
export const PostData = styled.View`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    padding: 20px;
    margin: 10px;
    border: solid black;
    border-radius: 10px;
    border-width: 1px;
    width: 290px;
`;
export const PostHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;
export const PostHeaderText = styled.Text`
    font-size: 14px;
    color: ${Colors.primary};
    margin-left: 10px;
`;
export const ImageTemplate = styled.Image`
    max-width: 300px;
    max-height: 300px;
`;

export const TextH1 = styled.Text`
    /* background-image: linear-gradient(90deg, rgba(141,5,240,1) 0%, rgba(79,0,176,1) 35%, rgba(103,0,119,1) 100%); */
    font-weight: bold;
    font-size:  24px;
    /* background-clip: text; */
    color: transparent;
`;
export const ContainerIcon = styled.View`
    display: flex;
    border-radius: 100%;
    flex-wrap: wrap;
    width: 50px;
    height: 50px;
`;
export const TextH2 = styled.Text`
    padding-bottom: 20px;

`;

export const TextH3 = styled.Text`

`;