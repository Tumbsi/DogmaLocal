import React, { useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { AuthContext } from '../backend/AuthContext';
import { CommonActions } from '@react-navigation/native';
import DogPhoto from '../components/DogPhoto';


const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <ScrollView>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Go to Upload"
          onPress={() => navigation.navigate('Upload')}
        />
        <Button
          title="Logout"
          onPress={handleLogout}
        />
      </View>
      <DogPhoto uri="" />
      <DogPhoto uri="" />
      <DogPhoto uri="" />
    </ScrollView>
  );
};

export default HomeScreen;