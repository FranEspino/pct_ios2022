import React, { createContext ,useEffect,useReducer} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginData, Persona,Rol } from "../interfaces/appInterfaces";
import { authReducer, AuthState } from "./AuthReducer";
import Toast from 'react-native-simple-toast';
import axios from "axios";
import qs from 'qs';
import {baseURL} from "../api/Api";

//Inicializacion de la informacion y metodos que se utilizaran
const authInitialState: AuthState = {
    statusLogin: 'cheking',
    user: {},
    rol: {},
}

interface AuthContextProps {
    statusLogin: 'cheking' | 'authenticated' | 'not-authenticated';
    user : Persona, 
    rol : Rol,
    signIn: (loginData: LoginData) => void;
    LogOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps );

export const AuthProvider = ({children} : any) => {
   const [state,dispatch] = useReducer(authReducer,authInitialState)
   useEffect(() => {
    checkUser();
    }, [])

    const signIn = ({ dni, clave }: LoginData) => {
        const data = { 'dni': dni,'clave':clave };
        try {
            axios({
                method: "post",
                url:  `${baseURL}/api/login`,
                data: qs.stringify(data),
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
            }).then(function (response) {
                if (response.status === 200) {
                    Toast.showWithGravity("Bienvenido", Toast.LONG, Toast.BOTTOM);
                    dispatch({
                        type: 'signIn',
                        payload: {
                            user: response.data.persona[0],
                             rol: response.data.rol[0]
                        }
                    });
                        AsyncStorage.setItem('user', JSON.stringify(response.data.persona[0]), (err) => {
                            if (err) {
                                console.log("an error");
                                throw err;
                            }
                            console.log("success");
                        }).catch((err) => {
                            console.log("error is: " + err);
                        });

                } else {
                    Toast.showWithGravity("Error verifique las credenciales.", Toast.LONG, Toast.BOTTOM);
                }
            }).catch(function (e) {
                Toast.showWithGravity("Error verifique las credenciales. ", Toast.LONG, Toast.BOTTOM);
            });
        

        } catch (error) {
            Toast.showWithGravity("Ocurrio un error, hable con el administrador. ", Toast.LONG, Toast.BOTTOM);
        }
    };
    const LogOut = async () => {
        await AsyncStorage.removeItem('user');
        dispatch({ type: 'logOut' ,
            
       });

    };
    const checkUser = async () => {
        // No token, no autenticado
        const user = await AsyncStorage.getItem('user');
        console.log(user)
        if (!user)
        return dispatch({
            type: 'logOut'
        });
        else
            dispatch({
                type: 'signIn',
                payload: {
                    user: JSON.parse(user),
                    rol: {}
                }
            });
    };

   return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            LogOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}


