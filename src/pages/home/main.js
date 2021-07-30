import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styled from "styled-components";
import RegisteredProgramsSeparatedByDay from "./registered_programs_separated_by_day";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

// const ShadowedView = styled(View)`
//   box-shadow: 0px 4px 30px 0px #44444429;
// `;

export default function Main() {
  // const [isAllButtonActive,setIsAllButtonActive] = useState(false);
  const [buttons, setButtons] = useState([
    { name: "스트레스 해소", active: true },
    { name: "체력 증진", active: false },
    { name: "심리안정", active: false },
  ]);
  const isActiveAll = (btns) =>
    btns.filter(({ active }) => active).length === 3;
  const onButtonClicked = (name) => {
    let newButtons = JSON.parse(JSON.stringify(buttons));
    const clickedButtonIndex = newButtons.findIndex((b) => name === b.name);
    newButtons[clickedButtonIndex].active =
      !newButtons[clickedButtonIndex].active;
    if (isActiveAll(newButtons)) {
      newButtons = newButtons.map((btn) => ({ ...btn, active: false }));
    }
    setButtons(newButtons);
  };

  const inactivateAll = () => {
    let newButtons = JSON.parse(JSON.stringify(buttons));
    newButtons = newButtons.map((b) => ({ ...b, active: false }));
    setButtons(newButtons);
  };

  const activateAll = () => {
    let newButtons = JSON.parse(JSON.stringify(buttons));
    newButtons = newButtons.map((b) => ({ ...b, active: true }));
    setButtons(newButtons);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>프로그램 예약</Text>
      </View>

      <SafeAreaView style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() =>
            isActiveAll(buttons) ? inactivateAll() : activateAll()
          }
          style={isActiveAll(buttons) ? styles.buttonActive : styles.button}
        >
          <View>
            <Text
              style={
                isActiveAll(buttons)
                  ? styles.buttonTextActive
                  : styles.buttonText
              }
            >
              전체
            </Text>
          </View>
        </TouchableOpacity>
        {buttons.map(({ name, active }, index) => (
          <TouchableOpacity
            onPress={() => onButtonClicked(name)}
            key={index}
            style={[
              active ? styles.buttonActive : styles.button,
              styles.buttonMargin,
            ]}
          >
            <View>
              <Text
                style={active ? styles.buttonTextActive : styles.buttonText}
              >
                {name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>

      <View style={styles.howRegisterContainer}>
        <View style={styles.howRegister}>
          <Text>어느 일정에{"\n"}참여하고 싶으세요?</Text>
          <Text style={styles.grayText}>일정별 예약</Text>

          <MaterialCommunityIcons
            name="calendar"
            style={styles.tinySymbol}
            size={40}
          />
        </View>

        <View style={styles.howRegister}>
          <Text>어느 프로그램에{"\n"}참여하고 싶으세요?</Text>
          <Text style={styles.grayText}>프로그램별 예약</Text>
          <Image
            style={[styles.imageResize, styles.tinySymbol]}
            source={require("../../../images/dallem.png")}
          />
        </View>
      </View>

      <RegisteredProgramsSeparatedByDay />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#FEFEFE",
  },

  buttonsContainer: {
    marginLeft: (Dimensions.get("window").width * 2.285) / 100,
    marginRight: (Dimensions.get("window").width * 1.393) / 100,
    width: (Dimensions.get("window").width * 96.322) / 100,
    // height: (Dimensions.get("window").height * 3.344) / 100,
    flex: 1,
    flexDirection: "row",
    overflow: "scroll",
    marginBottom: (Dimensions.get("window").height * 2.341) / 100,
  },

  buttonMargin: {
    marginLeft: (Dimensions.get("window").width * 2.843) / 100,
  },

  button: {
    // height: (Dimensions.get("window").height * 3.344) / 100,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#C2C2C2",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },

  buttonActive: {
    height: (Dimensions.get("window").height * 3.344) / 100,
    backgroundColor: "#FAA194",
    borderColor: "#FAA194",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },

  buttonText: {
    marginLeft: 30,
    marginRight: 30,
    color: "rgba(0, 0, 0, 0.6)",
  },

  buttonTextActive: {
    marginLeft: 30,
    marginRight: 30,
    color: "#FFFFFF",
  },

  titleContainer: {
    marginLeft: (Dimensions.get("window").width * 2.173) / 100,
    marginBottom: (Dimensions.get("window").height * 1.783) / 100,
  },
  title: {
    fontWeight: "700",
  },
  tinySymbol: {
    width: (Dimensions.get("window").width * 9.478) / 100,
    marginTop: (Dimensions.get("window").height * 4.57) / 100,
    height: (Dimensions.get("window").height * 3.901) / 100,
  },

  imageResize: {
    resizeMode: "contain",
    // width: (Dimensions.get("window").width * 9.478) / 100,
    // marginTop: (Dimensions.get("window").height * 4.57) / 100,
    // height: (Dimensions.get("window").height * 3.901) / 100,
  },
  howRegisterContainer: {
    height: (Dimensions.get("window").height * 22.742) / 100,
    marginLeft: (Dimensions.get("window").width * 4.739) / 100,
    marginRight: (Dimensions.get("window").width * 4.739) / 100,
    position: "relative",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: (Dimensions.get("window").height * 3.121) / 100,
  },
  grayText: {
    color: "rgba(0, 0, 0, 0.6)",
    marginTop: (Dimensions.get("window").height * 1.449) / 100,
    fontSize: 12,
  },

  howRegister: {
    width: (Dimensions.get("window").width * 42.18) / 100,
    backgroundColor: "#FFFFFF",
    height: "100%",
    paddingTop: (Dimensions.get("window").height * 3.344) / 100,
    paddingLeft: (Dimensions.get("window").width * 4.739) / 100,
    paddingRight: (Dimensions.get("window").width * 4.739) / 100,
    borderRadius: 8,

    alignContent: "flex-start",

    shadowColor: "#444444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 30,
    elevation: 4,
  },
});
