import { createContext,useContext,useEffect,useState } from "react";
import { auth ,db} from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,updateProfile
} from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'

const AuthContext=createContext();
export function AuthContextProvider({children}){
const [user,setUser]=useState({});
const [error,setError]=useState(false);
 
async function  signUp(name,email,password){
     createUserWithEmailAndPassword(auth,email,password).then(()=>{updateProfile(auth.currentUser,{displayName:name})});
     setDoc(doc(db,'users',email),{
        savedShows:[]
     })

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
        <AuthContext.Provider value={{signUp,logIn,logOut,user,setError,error}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext);
}