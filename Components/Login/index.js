import React, { Component } from "react";
import authStore from "../../store/authStore";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = {
    title: "Login"
  };

  handleChangeUsername = value => {
    this.setState({ username: value });
  };
  handleChangePassword = value => {
    this.setState({ password: value });
  };

  handleLogin = () => {
    const navigation = this.props.navigation;
    authStore.loginUser(this.state, navigation);
  };

  handleSignup = () => {
    const navigation = this.props.navigation;
    authStore.registerUser(this.state, navigation);
  };
  render() {
    // if (authStore.user) {
    //   this.props.navigation.navigate("CoffeeList");
    // }
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={this.state.username}
                    onChangeText={this.handleChangeUsername}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "white" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={this.handleChangePassword}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button full success onPress={this.handleLogin}>
            <Text>Login</Text>
          </Button>
          <Button full warning onPress={this.handleSignup}>
            <Text>Register</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

export default Login;
