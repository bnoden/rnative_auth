import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };

  render() {
    const btnLoginText = 'Log in';
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='username@gmail.com'
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

        </CardSection>
        <CardSection />

        <CardSection>
          <Button className="btnLogin">{btnLoginText}</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
