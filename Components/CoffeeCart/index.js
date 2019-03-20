import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../store/cartStore";
import authStore from "../../store/authStore";

class CoffeeCart extends Component {
  render() {
    const navigation = this.props.navigation;
    {
      !authStore.user && this.props.navigation.navigate("Login");
    }
    const items = cartStore.items;
    let cartItems;
    if (items) {
      cartItems = items.map(item => <CartItem item={item} key={item.id} />);
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => cartStore.checkoutCart(navigation)}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CoffeeCart);
