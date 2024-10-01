import React, { createContext, useState } from 'react';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { database } from '../FirebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${username}`));
      if (snapshot.exists() && snapshot.val().password === password) {
        setIsAuthenticated(true);
        console.log('Logged in');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const createAccount = async (username, password) => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${username}`));
      if (snapshot.exists()) {
        alert('Username already exists');
      } else {
        await set(ref(database, `users/${username}`), { username, password });
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
};