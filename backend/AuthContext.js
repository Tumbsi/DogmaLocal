import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../FirebaseConfig'; // Import auth instance from FirebaseConfig

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.code === 'auth/user-not-found') {
        alert('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password.');
      } else {
        alert('Error logging in. Please try again.');
      }
    }
  };
  

  const createAccount = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Error creating account');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, createAccount, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
