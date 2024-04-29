/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Children, createContext, useContext, useEffect, useState } from "react"
import { ApiLogin, ApiLogout } from "../Api/RestApi";

const InitContext = {
    doLogin: () => {},
    doLogout:  () => {},
    Token: null,
    isLoggin: false,
}

const AuthContext = createContext(InitContext);

export const UseAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) =>{

     const [Token,setToken] = useState(null);
     const [isLoggin,setIsLoggin] = useState(false);

    const doLogin = async (email,password) => {
        const api = await ApiLogin(email,password);
        if(api.status === 200){
            localStorage.setItem('LOGGED_STATUS',api.data.user.accessToken);
            setIsLoggin(true);
            setToken(api.data.user.token);
        }
    }
    
    const doLogout = async () => {
        const api = await ApiLogout(Token);
        console.log(api);
    }

    const getToken = () =>{
        return localStorage.getItem('LOGGED_STATUS') ?? null;
    }

    useEffect(() => {
        setToken(getToken());
        if(Token !== null)  {
            setIsLoggin(true);
        }
    },[Token]);

    return(
        <>
            <AuthContext.Provider value={{doLogin,doLogout,Token,isLoggin}}>
                {children}
            </AuthContext.Provider>
        </>
    );
}