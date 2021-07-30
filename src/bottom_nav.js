import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "./pages/home";
import Register from "./pages/register";
import RegisteredDallems from "./pages/registered_dallems";
import MyPage from "./pages/my_page";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={false}
        activeColor="#BC8579"
        inactiveColor="#172B39"
        barStyle={{
          backgroundColor: "#FFFFFF",
          paddingTop: 15,
          paddingBottom: 15,

          borderColor: "#E9E9E9",
          borderWidth: 1,
          borderStyle: "solid",

          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "홈",
            tabBarIcon: ({ color }) => (
              // TODO 홈 아이콘 완벽하게 똑같은 걸로 바꾸기
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarLabel: "예약하기",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Registered Dallems"
          component={RegisteredDallems}
          options={{
            tabBarLabel: "예약된 달램",
            tabBarIcon: ({ color }) => (
              // TODO 예약된 달램 아이콘 완벽하게 똑같은 걸로 바꾸기
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="My Page"
          component={MyPage}
          options={{
            tabBarLabel: "마이페이지",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
