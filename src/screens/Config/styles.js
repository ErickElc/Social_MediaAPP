import styled from "styled-components";


export const ContainerSafe = styled.SafeAreaView`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
`;
export const ContainerMain = styled.View`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
`;
export const ContainerInputs = styled.View`
    display: flex;
    flex-flow: column;
    /* align-items: center; */
    width: 80%;
`;
export const TextH2 = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
    align-self: flex-start;

`;
export const ContainerHeader = styled.View`
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
    margin-bottom: 10px;
`;
export const ContainerButton = styled.TouchableOpacity`
    display: flex;
    flex-flow: row wrap;
    align-self: flex-start;
    margin-right: 300px;
    margin-bottom: 50px;
`;
export const TextButton = styled.Text`
    font-size: 20px;
    align-self: flex-start;
`;