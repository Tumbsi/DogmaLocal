import React from 'react';
import { AuthProvider } from './backend/AuthContext';
import MainStackNavigator from './navigation/MainStackNavigator';


const App = () => {
  return (
    <AuthProvider>
      <MainStackNavigator />
    </AuthProvider>
  );
};

export default App;