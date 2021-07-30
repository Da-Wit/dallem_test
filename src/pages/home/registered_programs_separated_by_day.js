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

const DateText = ({ year, month, day, dayOfTheWeek }) => (
  <Text style={styles.date}>
    {year}년 {month}월 {day}일 {dayOfTheWeek}요일
  </Text>
);

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
            <DateText
              year={year}
              month={month}
              day={day}
              dayOfTheWeek={dayOfTheWeek}
            />

            <View style={styles.programsContainer}>
              {programs.map(({ programName, hour, minute }, programIndex) => (
                <View style={styles.programContainer} key={programIndex}>
                  <View style={styles.textesContainer}>
                    <Text style={styles.programTime}>
                      {hour}:{minute}
                    </Text>
                    <Text style={styles.programName}>{programName}</Text>
                  </View>
                  <View style={styles.RegisterBtnContainer}>
                    <TouchableOpacity style={styles.RegisterBtn}>
                      <View>
                        <Text style={styles.RegisterBtnText}>참가</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
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
    marginTop: (Dimensions.get("window").height * 5) / 100,
    flex: 1,
  },

  detail: {
    color: "#FAA194",
    fontWeight: "500",
    marginTop: (Dimensions.get("window").height * 5.3) / 100,
  },

  date: {
    fontWeight: "500",
    fontSize: 13,
  },
  dayContainer: {
    marginTop: (Dimensions.get("window").height * 2.006) / 100,
  },

  programsContainer: {
    marginTop: (Dimensions.get("window").height * 1.003) / 100,
    paddingBottom: 20,
  },

  programContainer: {
    flexDirection: "row",

    paddingBottom: (Dimensions.get("window").height * 1.449) / 100,
    borderBottomColor: "rgba(0, 0, 0, 0.16)",
    borderBottomWidth: 1,
  },

  textesContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  programTime: {},
  programName: {
    marginLeft: (Dimensions.get("window").width * 3.791) / 100,
  },
  RegisterBtn: {
    paddingLeft: 15.5 * 1.5,
    paddingRight: 15.5 * 1.5,
    paddingTop: 4 * 1.5,
    paddingBottom: 4 * 1.5,

    borderRadius: 165,
    backgroundColor: "#172B39",
  },
  RegisterBtnContainer: {
    paddingRight: (Dimensions.get("window").width * 3.672) / 100,
    paddingTop: (Dimensions.get("window").height * 3.455) / 100,
  },

  RegisterBtnText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
