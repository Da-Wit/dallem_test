import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Top() {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.blackText}>
          심다슬님{"\n"}오늘도 달램을 통해 힘찬 하루가 되세요!:)
        </Text>
        <View style={styles.joinSection}>
          <TouchableOpacity style={styles.joinButton} onPress={onPress}>
            <Text style={styles.joinButtonText}>참가</Text>
          </TouchableOpacity>
          <Text style={[styles.white, styles.title]}>
            오늘 예약된 달린 프로그램
          </Text>
          <Text style={styles.white}>14:00{"\t"}교정테라피</Text>
          {/* <Text style={styles.white}></Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: "#F9F7F6",
    height: (Dimensions.get("window").height * 32.887) / 100,
  },
  innerContainer: {
    paddingTop: (Dimensions.get("window").height * 9.476) / 100,
    paddingLeft: (Dimensions.get("window").width * 5.568) / 100,
    paddingRight: (Dimensions.get("window").width * 5.805) / 100,
  },
  blackText: { fontSize: 18 },
  white: { color: "#FFFFFF" },
  joinSection: {
    width: "100%",
    marginTop: (Dimensions.get("window").height * 4.124) / 100,
    borderRadius: 8,
    height: (Dimensions.get("window").height * 9.587) / 100,
    backgroundColor: "#FAA194",
    paddingLeft: (Dimensions.get("window").width * 1.783) / 100,
    paddingTop: (Dimensions.get("window").height * 1.895) / 100,
  },
  joinButton: {
    alignItems: "center",
    // width: ((Dimensions.get("window").height * 3.567) / 100) * 2 - 2,
    // height: (Dimensions.get("window").height * 3.567) / 100,
    paddingLeft: (Dimensions.get("window").width * 3.554) / 100,
    paddingRight: (Dimensions.get("window").width * 3.554) / 100,
    paddingTop: (Dimensions.get("window").height * 0.445) / 100,
    paddingBottom: (Dimensions.get("window").height * 0.445) / 100,
    // position: "absolute",

    // top: (Dimensions.get("window").height * 3.455) / 100,
    // right: (Dimensions.get("window").width * 1.727) / 100,
    alignSelf: "flex-end",
    borderRadius: 165,
    backgroundColor: "#172B39",
  },
  joinButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  title: { fontWeight: "500", fontSize: 16 },
  tinySymbol: {},
  mainContainer: {},
});
