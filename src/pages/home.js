import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function Home() {
  const onPress = () => {};
  return (
    <View style={styles.homeContainer}>
      <View style={styles.topContainer}>
        <Text>심다슬님</Text>
        <Text>오늘도 달램을 통해 힘찬 하루가 되세요!:)</Text>
        <View style={styles.joinSection}>
          <TouchableOpacity style={styles.joinButton} onPress={onPress}>
            <Text>참가</Text>
          </TouchableOpacity>
          <Text>오늘 예약된 달린 프로그램</Text>
          <Text>14:00</Text>
          <Text>교정테라피</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <Text>프로그램 예약</Text>
        {/* 전체, 스트레스 해소 ... */}
        <View style={styles.howRegisterContainer}>
          <View style={styles.registerByScheduleContainer}>
            <Text>어느 일정에{"\n"}참여하고 싶으세요?</Text>
            <Text>일정별 예약</Text>
            {/* Icon or Emoji */}
          </View>

          <View style={styles.registerByProgram}>
            <Text>어느 프로그램에{"\n"}참여하고 싶으세요?</Text>
            <Text>프로그램별 예약</Text>
            {/* Icon or Emoji */}
          </View>
        </View>

        <View style={styles.registeredProgramContainer}>
          <View style={styles.registeredProgramTop}>
            <Text>예약한 프로그램</Text>
            <TouchableWithoutFeedback>
              <Text>더보기</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {},
  joinSection: {},
  joinButton: {
    alignItems: "center",
    backgroundColor: "#F9F7F6",
    padding: 10,
  },
  mainContainer: {},
  howRegisterContainer: {},
  registeredProgramContainer: {},
});
