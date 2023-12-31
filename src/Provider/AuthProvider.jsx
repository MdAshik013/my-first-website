import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const AuthContext =createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);




    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the in auth state changed', currentUser);
            setUser(currentUser);
        })
        return()=>{
            unSubscribe(); // for clean 
        }
    },[])

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth);
    }





    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;