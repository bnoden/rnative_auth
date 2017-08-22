import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Button,
  CardSection,
  Header,
  Spinner,
  Titles
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDqZNOU64hSZO-u6RzngrVRHosVonvNTD4',
      authDomain: 'auth-47ef6.firebaseapp.com',
      databaseURL: 'https://auth-47ef6.firebaseio.com',
      projectId: 'auth-47ef6',
      storageBucket: 'auth-47ef6.appspot.com',
      messagingSenderId: '72128811864'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    const { headerTitle = 'Authentify' } = { Titles };

    return (
      <View>
        <Header headerText={headerTitle} />
        <View>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

export default App;
