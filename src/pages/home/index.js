import React from "react";
import { StyleSheet, View } from "react-native";
import Top from "./top";
import Main from "./main";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Top />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
