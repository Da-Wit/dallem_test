import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
        <Text>예약한 프로그램</Text>
        <TouchableWithoutFeedback>
          <Text style={{ color: "#FAA194" }}>
            더보기
            <MaterialCommunityIcons name="chevron-right" />
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {registeredProgramsSeparatedByDay.map(
        ({ date: { year, month, day, dayOfTheWeek }, programs }, dayIndex) => (
          <View style={styles.dayContainer} key={dayIndex}>
            <Text>
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
  container: {},
  top: {},
  dayContainer: {},
  programContainer: {},
  programTime: {},
  programName: {},
  programRegisterBtn: {},
});
