import { AsyncStorageStatic } from "react-native"

export const setUserLocalStorage = async (userOrData) => {
    try {
        await AsyncStorageStatic.setItem('user', JSON.stringify(userOrData));
    } catch (error) {
        console.log(error);
    }
}

export const getUserLocalStorage = async () => {
    try {
        const user = await AsyncStorageStatic.getItem('user');
        return JSON.parse(user);
    } catch (error) {
        console.log(error);
    }
}
