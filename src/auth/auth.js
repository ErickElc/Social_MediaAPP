import { createContext, useContext, useState} from "react";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const VerifyLoggin = async () => {
        const User = await getUserLocalStorage();
        try {
            await http.post('auth/free',{
                token: User?.token
            });
            console.log('Autorizado!');
            return true;
        } catch (error) {
            return false;
        }
    };

    const authenticate  = async (email, password) => {
        const response = await LoginRequest(email,password);
        const payload ={token: response?.data.token, email};
        setUser(payload);
        setUserLocalStorage(payload);
        return response.status;
    }
    const logout = () => {
        setUser(null);
        setUserLocalStorage(null);
    }
    return (
        <AuthContext.Provider value={{...user, authenticate, logout, VerifyLoggin}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

