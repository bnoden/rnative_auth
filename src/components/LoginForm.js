import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    const btnLoginText = 'Log in';
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
          <Button className="btnLogin">
            <Text>
              {btnLoginText}
            </Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
