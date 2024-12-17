import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	
	const loginUser = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth , currentUser => {
			console.log("state captured",currentUser)
			setUser(currentUser)
			if(currentUser?.email){
				const user = {email: currentUser?.email}
				axios.post('http://localhost:3000/jwt',user,{
					withCredentials: true
				})
				.then(res => {
					console.log("login token",res.data)
					setLoading(false)
				})
			} else{
				axios.post('http://localhost:3000/logout', {},{withCredentials: true})
				.then(res => {
					console.log("logout token",res.data)
					setLoading(false)
				})
			}

			
			setLoading(false)
		})
		return () => {
			unsubscribe();
		}
	},[])

	const signOutUser =() => {
		setLoading(true)
		return signOut(auth)
	}


	const authInfo = {
		user,
		loading,
		createUser,
		loginUser,
		signOutUser

	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;