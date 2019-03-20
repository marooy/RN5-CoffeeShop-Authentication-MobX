import { observable, decorate } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("myToken", token);
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  checkForUser = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentDate = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentDate) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };

  registerUser = async (userData, navigation) => {
    try {
      await axios.post("http://coffee.q8fawazo.me/api/register/", userData);
      this.loginUser(userData, navigation);
      //   const user = res.data;
      //   this.setUser(user.token);
      //   navigation.replace("");
    } catch (error) {
      console.log(error);
    }
  };

  loginUser = async (userData, navigation) => {
    try {
      const res = await axios.post(
        "http://coffee.q8fawazo.me/api/login/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      navigation.replace("CoffeeList");
    } catch (error) {
      console.log(error);
    }
  };

  logout = navigation => {
    this.setUser();
    navigation.replace("Login");
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForUser();
export default authStore;
