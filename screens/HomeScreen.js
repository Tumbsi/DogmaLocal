import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import DogPhoto from '../components/DogPhoto';

const HomeScreen = ({ navigation }) => {
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
    </View>
    <DogPhoto uri="" />
    <DogPhoto uri="" />
    <DogPhoto uri="" />
    </ScrollView>
  );
};

export default HomeScreen;