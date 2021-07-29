import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import React from "react";
import { StyleSheet } from "react-native";
import Home from "./pages/home";
import Register from "./pages/register";
import RegisteredDallems from "./pages/registered_dallems";
import MyPage from "./pages/my_page";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="RegisteredDallems" component={RegisteredDallems} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
