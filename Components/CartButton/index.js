import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../store/cartStore";
import authStore from "../../store/authStore";

class CartButton extends Component {
  Check = () => {
    if (!authStore.user) {
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate("CoffeeCart");
    }
  };
  render() {
    return (
      <Button light transparent onPress={this.Check}>
        <Text>
          {cartStore.quantity + " "}
          <Icon
            type="FontAwesome"
            name="coffee"
            style={{ color: "white", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(CartButton));
