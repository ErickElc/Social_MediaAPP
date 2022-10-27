import { createContext, useContext} from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

