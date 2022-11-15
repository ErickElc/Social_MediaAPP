import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth/auth";
import http from "../api/api";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState();
   const {user} = useAuth();
    useEffect(()=>{
        http.post('api/users/list/email',{
            email: user?.email,
            token: user?.token
        }).then((res) => {
            setUserData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[user?.token, user?.email]);
    return <DataContext.Provider value={{userData, setUserData}}>{children}</DataContext.Provider>
}
export const useDataContext = () => {
    const context = useContext(DataContext);
    return context;
};