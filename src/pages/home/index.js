import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Top from "./top";
import Main from "./main";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Top />
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
