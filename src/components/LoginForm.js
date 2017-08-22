import React, { Component } from 'react';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    const btnLoginText = 'Log in';
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="you@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button className="btnLogin" onPress={this.onButtonPress.bind(this)}>
            {btnLoginText}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
