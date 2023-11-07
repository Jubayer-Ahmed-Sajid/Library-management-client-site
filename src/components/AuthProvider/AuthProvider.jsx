import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from "axios";

export const AuthContext = createContext('')
const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
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
            const userEmail = currentUser?.email || user?.email;
            const loggedinUser = { email: userEmail };
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedinUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedinUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }

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