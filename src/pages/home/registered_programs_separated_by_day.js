import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RegisteredProgramsSeparatedByDay() {
  const getData = () => [
    {
      date: { year: "2021", month: "7", day: "7", dayOfTheWeek: "수" },
      programs: [
        { programName: "교정테라피", hour: "14", minute: "00" },
        { programName: "마음달램", hour: "16", minute: "00" },
      ],
    },
  ];

  //   const registeredProgramsSeparatedByDay = useMemo(() => getData(), [getData]);
  const registeredProgramsSeparatedByDay = getData();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>예약한 프로그램</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.detail}>
            더보기
            <MaterialCommunityIcons name="chevron-right" />
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {registeredProgramsSeparatedByDay.map(
        ({ date: { year, month, day, dayOfTheWeek }, programs }, dayIndex) => (
          <View style={styles.dayContainer} key={dayIndex}>
            <Text style={styles.date}>
              {year}년 {month}월 {day}일 {dayOfTheWeek}요일
            </Text>
            {programs.map(({ programName, hour, minute }, programIndex) => (
              <View style={styles.programContainer} key={programIndex}>
                <Text style={styles.programTime}>
                  {hour}:{minute}
                </Text>
                <Text style={styles.programName}>{programName}</Text>
                <TouchableOpacity>
                  <View>
                    <Text style={styles.programRegisterBtn}>참가</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get("window").width * 88.625) / 100,
    marginLeft: (Dimensions.get("window").width * 4.739) / 100,
    marginRight: (Dimensions.get("window").width * 4.739) / 100,
    marginBottom: (Dimensions.get("window").height * 4.793) / 100,

    paddingLeft: (Dimensions.get("window").width * 4.739) / 100,
    paddingRight: (Dimensions.get("window").width * 4.739) / 100,

    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  top: {
    flexDirection: "row",
  },

  title: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: (Dimensions.get("window").height * 2.898) / 100,
  },

  detail: {
    color: "#FAA194",
    fontWeight: "500",
    position: "absolute",
    right: (Dimensions.get("window").width * 4.739) / 100,
    marginTop: (Dimensions.get("window").height * 3.344) / 100,
  },
  date: {
    fontWeight: "500",
  },
  dayContainer: {},
  programContainer: {},
  programTime: {},
  programName: {},
  programRegisterBtn: {},
});
