import React from 'react';
import { View } from 'react-native';
import UserProfile from '../components/UserProfile';

const ProfileScreen = () => {
  return (
    <View>
      <UserProfile name="Dog Lover" bio="doggyyy" />
    </View>
  );
};

export default ProfileScreen;