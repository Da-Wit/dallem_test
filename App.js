// import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/home";
// import Nav from "./src/nav";

export default function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      <Home />
      {/* <Nav /> */}
    </View>
    // </NavigationContainer>
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
