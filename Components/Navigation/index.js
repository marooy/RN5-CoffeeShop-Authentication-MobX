import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";
import Login from "../Login";

import CheckUser from "./CheckUser";

const StackNav = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login,
    CheckUser: CheckUser
  },
  {
    initialRouteName: "CheckUser",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(8,80,129)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(8,80,129)"
    }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
