import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Titles } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDqZNOU64hSZO-u6RzngrVRHosVonvNTD4',
      authDomain: 'auth-47ef6.firebaseapp.com',
      databaseURL: 'https://auth-47ef6.firebaseio.com',
      projectId: 'auth-47ef6',
      storageBucket: 'auth-47ef6.appspot.com',
      messagingSenderId: '72128811864'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>Log out</Button>
      );
    }
    return <LoginForm />;
  }

  render() {
    const { headerTitle = 'Authentify' } = { Titles };

    return (
      <View>
        <Header headerText={headerTitle} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
