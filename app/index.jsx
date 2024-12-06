import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }
    Alert.alert('Login Success', `Welcome, ${username}`);
  };
  return (
    <View style={styles.container}>
    <View style={{display:'flex',justifyContent:'center',alignContent:'center',backgroundColor:'#ecf0f1',width:300,height:400,borderRadius:10}}>
    <Text style={{textAlign:'center',fontSize:30,marginBottom:30}}>sign in</Text>

      <TextInput
        style={styles.input1}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
 
      <TextInput
        style={styles.input1}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
  onPress={handleLogin}
  title="login"
  color="#841584"
  style={{margin:10}}
/>
<Text style={{marginTop:30,paddingLeft:20,fontSize:18}}>Don't  have an account ? Signup</Text>

    </View>
    </View>
  );
    

      
};

const styles = StyleSheet.create({
  container: {
    padding:45,
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: 'white',
  
  },
  
  input1: {
    marginLeft:10,
    marginRight:10,
    marginBottom:30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
   fontSize:15
   
  },
  input2: {
    
   marginLeft:10,
    marginRight:10,
    marginBottom:35,
    padding:15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, 
    fontSize:15
 
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  btn:{
    margin:10,
    backgroundColor:'white'
  }
  
});

export default App;
