import React, { children, createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);

    useEffect(()=>{
       const unsubcribe =  onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state obserer', loggedUser);
            setUser(loggedUser);
        }) 
        return () => {
            unsubcribe();
        }
    }, [])

const authInfo = {
    user,

}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;