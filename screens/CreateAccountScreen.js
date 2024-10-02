import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../backend/AuthContext';


const CreateAccountScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { createAccount } = useContext(AuthContext);

    const handleCreateAccount = () => {
      createAccount(email, password);
      //navigation.replace('Home');
    };

  return (
    <View>
      <Text>Create Account</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
};

export default CreateAccountScreen;