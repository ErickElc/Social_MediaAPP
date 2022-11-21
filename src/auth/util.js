import AsyncStorage from '@react-native-async-storage/async-storage';

import http from "../api/api";
export const setUserLocalStorage = async (token, email) => {
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('email', email); 
}

export const getUserLocalStorage = async () => {
    const token = await AsyncStorage.getItem('token');
    const email = await AsyncStorage.getItem('email');
    return {token, email};
}
export  const LoginRequest = async (email, password) => {
    try {
        const request = await http.post('api/users/login', {email, password});
        return request;
    } catch (error) {
        return null;
    }
}