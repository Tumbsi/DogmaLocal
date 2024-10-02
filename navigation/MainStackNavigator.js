import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import { AuthContext } from '../backend/AuthContext';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ headerLeft: null, headerShown: true }} // Hide back button on Home
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Upload" component={UploadScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
