import { createContext,useContext,useEffect,useState } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,updateProfile
} from 'firebase/auth'

const AuthContext=createContext();
export function AuthContextProvider({children}){
const [user,setUser]=useState({});
 
async function  signUp(name,email,password){
    return createUserWithEmailAndPassword(auth,email,password).then(()=>{updateProfile(auth.currentUser,{displayName:name})});
}
function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password);
}

function logOut(){
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return()=>{
        unsubscribe();
    }
})

    return(
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext);
}