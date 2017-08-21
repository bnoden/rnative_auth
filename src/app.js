import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Titles } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDqZNOU64hSZO-u6RzngrVRHosVonvNTD4',
      authDomain: 'auth-47ef6.firebaseapp.com',
      databaseURL: 'https://auth-47ef6.firebaseio.com',
      projectId: 'auth-47ef6',
      storageBucket: 'auth-47ef6.appspot.com',
      messagingSenderId: '72128811864'
    });
  }

  render() {
    const { appTitle = 'App Title', headerTitle = 'Header Title' } = { Titles };

    return (
      <View>
        <Header headerText={headerTitle} />
        <Text>
          {appTitle}
        </Text>
      </View>
    );
  }
}

export default App;
