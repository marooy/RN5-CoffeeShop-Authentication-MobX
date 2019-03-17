import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Navigation
import AppContainer from "../Navigation";

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.transparent}>
        <AppContainer />
      </Container>
    );
  }
}

export default HomePage;
