import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { List, Content, Footer, Text, Container, Button } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";
import authStore from "../../store/authStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../CartButton";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee List",
    headerLeft: null,
    headerRight: <CartButton />
  });
  render() {
    const coffeeshops = coffeeStore.coffeeshops;
    const navigation = this.props.navigation;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Container>
        <Content>
          <List>{shops}</List>
        </Content>
        <Footer>
          {authStore.user && (
            <Button
              style={{ width: "100%" }}
              block
              dark
              onPress={() => authStore.logout(navigation)}
            >
              <Text>logout</Text>
            </Button>
          )}
        </Footer>
      </Container>
    );
  }
}

export default withNavigation(observer(CoffeeList));
