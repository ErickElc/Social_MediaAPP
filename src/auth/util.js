import AsyncStorage from '@react-native-async-storage/async-storage';

import http from "../api/api";
export const setUserLocalStorage = async (userOrData) => {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(userOrData));
    } catch (error) {
        console.log(error);
    }
}

export const getUserLocalStorage = async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        return JSON.parse(user);
    } catch (error) {
        console.log(error);
    }
}
export  const LoginRequest = async (email, password) => {
    try {
        const request = await http.post('api/users/login', {email, password});
        return request;
    } catch (error) {
        return null;
    }
}