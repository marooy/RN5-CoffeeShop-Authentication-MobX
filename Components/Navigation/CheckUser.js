import React, { Component } from "react";
import authStore from "../../store/authStore";
import Login from "../Login";
import CoffeeList from "../CoffeeList";
import { View } from "react-native";
import { observer } from "mobx-react";
class CheckUser extends Component {
  componentDidMount() {
    if (authStore.user) {
      this.props.navigation.replace("CoffeeList");
    } else {
      this.props.navigation.replace("Login");
    }
  }
  render() {
    return <></>;
  }
}

export default observer(CheckUser);
