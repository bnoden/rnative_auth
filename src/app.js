import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Titles } from './components/common';

class App extends Component {
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
