import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import RegisteredProgramsSeparatedByDay from "./registered_programs_separated_by_day";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Main() {
  const [buttons, setButtons] = useState([
    { name: "스트레스 해소", active: true, focused: true },
    { name: "체력 증진", active: false, focused: false },
    { name: "심리안정", active: false, focused: false },
    { name: "심리안정2", active: false, focused: false },
    { name: "심리안정3", active: false, focused: false },
    { name: "심리안정4", active: false, focused: false },
  ]);
  const [allClickButton, setAllClickButton] = useState({
    name: "전체",
    active: false,
    focused: false,
  });
  const isActiveAll = (btns) =>
    btns.filter(({ active }) => active).length === btns.length;

  const inactivateAll = (btns) => {
    let newButtons = JSON.parse(JSON.stringify(btns));
    newButtons = newButtons.map((b) => ({ ...b, active: false }));
    return newButtons;
  };

  const defocusAll = (btns) => {
    let newButtons = JSON.parse(JSON.stringify(btns));
    newButtons = newButtons.map((b) => ({ ...b, focused: false }));
    return newButtons;
  };

  const onAllClickButtonClick = () => {
    if (allClickButton.active) {
      setButtons(inactivateAll(buttons));
      setAllClickButton({ ...allClickButton, active: false, focused: false });
      return;
    }
    setButtons(defocusAll(buttons));
    setAllClickButton({ ...allClickButton, active: true, focused: true });
    return;
  };

  const onButtonClicked = (name) => {
    let newButtons = JSON.parse(JSON.stringify(buttons));
    const clickedButtonIndex = newButtons.findIndex((b) => name === b.name);
    if (allClickButton.focused) {
      newButtons = defocusAll(inactivateAll(newButtons));

      newButtons[clickedButtonIndex].active =
        !newButtons[clickedButtonIndex].active;

      newButtons[clickedButtonIndex].focused =
        !newButtons[clickedButtonIndex].focused;

      setAllClickButton({ ...allClickButton, active: false, focused: false });
      setButtons(newButtons);

      return;
    }

    newButtons[clickedButtonIndex].active =
      !newButtons[clickedButtonIndex].active;

    newButtons[clickedButtonIndex].focused =
      !newButtons[clickedButtonIndex].focused;

    if (isActiveAll(newButtons)) {
      setButtons(defocusAll(newButtons));
      setAllClickButton({ ...allClickButton, active: true, focused: true });
      return;
    }

    setButtons(newButtons);
    return;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>프로그램 예약</Text>
      </View>

      <SafeAreaView style={styles.buttonsContainer}>
        <ScrollView
          horizontal={true}
          // decelerationRate={0}
          // snapToInterval={200} //your element width
          // snapToAlignment={"center"}
        >
          <TouchableOpacity
            onPress={onAllClickButtonClick}
            style={allClickButton.focused ? styles.focused : styles.normal}
          >
            <View>
              <Text
                style={
                  allClickButton.focused
                    ? styles.focusedText
                    : styles.normalText
                }
              >
                {allClickButton.name}
              </Text>
            </View>
          </TouchableOpacity>

          {buttons.map(({ name, focused }, index) => (
            <TouchableOpacity
              onPress={() => onButtonClicked(name)}
              key={index}
              style={[
                focused ? styles.focused : styles.normal,
                styles.buttonMargin,
              ]}
            >
              <View>
                <Text style={focused ? styles.focusedText : styles.normalText}>
                  {name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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

  normal: {
    // height: (Dimensions.get("window").height * 3.344) / 100,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#C2C2C2",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },

  focused: {
    height: (Dimensions.get("window").height * 3.344) / 100,
    backgroundColor: "#FAA194",
    borderColor: "#FAA194",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },

  normalText: {
    marginLeft: 30,
    marginRight: 30,
    color: "rgba(0, 0, 0, 0.6)",
  },

  focusedText: {
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
