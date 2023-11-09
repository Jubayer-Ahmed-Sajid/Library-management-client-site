import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const auth = getAuth();
    const createUser = (email,password,photoURL,name)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password,photoURL,name)
    }
    const provider =new GoogleAuthProvider ();
    const signUpWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const Login = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut =()=> {
        signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged((auth),currentUser =>{
            
            setUser(currentUser)
            setLoading(false)
           
            

        });
        return ()=>{
            return unSubscribe ()
        }
    },[])
    const authInfo = {createUser,user,loading,signUpWithGoogle,Login,LogOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;