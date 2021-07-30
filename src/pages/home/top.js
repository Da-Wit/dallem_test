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
      <Text style={styles.blackText}>
        심다슬님{"\n"}오늘도 달램을 통해 힘찬 하루가 되세요!:)
      </Text>

      <View style={styles.joinSection}>
        <View style={styles.textesContainer}>
          <Text style={[styles.white, styles.title]}>
            오늘 예약된 달린 프로그램
          </Text>
          <Text style={styles.white}>14:00{"\t"}교정테라피</Text>
        </View>
        <View style={styles.joinButtonContainer}>
          <TouchableOpacity style={styles.joinButton} onPress={onPress}>
            <Text style={styles.joinButtonText}>참가</Text>
          </TouchableOpacity>
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
    paddingTop: (Dimensions.get("window").height * 9.476) / 100,
    paddingLeft: (Dimensions.get("window").width * 5.568) / 100,
    paddingRight: (Dimensions.get("window").width * 5.805) / 100,
  },

  blackText: { fontSize: 18 },
  white: { color: "#FFFFFF" },
  joinSection: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    marginTop: (Dimensions.get("window").height * 4.124) / 100,
    borderRadius: 8,
    height: (Dimensions.get("window").height * 9.587) / 100,
    backgroundColor: "#FAA194",
  },

  textesContainer: {
    flex: 1,
    paddingLeft: (Dimensions.get("window").width * 3.791) / 100,
    paddingTop: (Dimensions.get("window").height * 1.895) / 100,
  },

  joinButtonContainer: {
    paddingRight: (Dimensions.get("window").width * 3.672) / 100,
    paddingTop: (Dimensions.get("window").height * 3.455) / 100,
  },

  joinButton: {
    paddingLeft: 15.5 * 1.5,
    paddingRight: 15.5 * 1.5,
    paddingTop: 4 * 1.5,
    paddingBottom: 4 * 1.5,

    borderRadius: 165,
    backgroundColor: "#172B39",
  },
  joinButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  title: { fontWeight: "500", fontSize: 16 },
});
