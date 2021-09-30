import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { HomeScreen } from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen, RegisterScreen } from "./screens/auth";
import { WarningsScreen } from "./screens/warnings";
import { DepartmentsScreen } from "./screens/department";
import { DirectionsScreen } from "./screens/directions";
import { NotificationsScreen } from "./screens/notifications";
import { ActivitiesScreen } from "./screens/activities";
import { GroupsScreen } from "./screens/groups";
import { Colors, styles } from "./screens/styles";
// const stack = createStackNavigator()
function LogoTitle(props) {
  return (
    <View style={styles.screentitle}>
      <Text style={styles.titletext}>{props.title}</Text>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={{
          uri: props.uri,
        }}
      />
    </View>
  );
}
function HomeLogoTitle(props) {
  return (
    <View style={styles.homescreentitle}>
      <Text style={styles.titletext}>{props.title}</Text>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={{
          uri: props.uri,
        }}
      />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.headerBackground,
          },
          headerTintColor: "chartreuse",
          headerTitleStyle: {
            fontWeight: "normal",
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
        options={{
            headerTitle: (props) => (
              <HomeLogoTitle
                title="Home"
                uri="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083386_960_720.jpg"
              />
            ),
          }}
        />
        <Stack.Screen
          options={{
            title: "Login",
          }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: (props) => (
              <LogoTitle
                title="Register"
                uri="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083386_960_720.jpg"
              />
            ),
          }}
          name="register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            title: "Warnings",
          }}
          
          name="warnings"
          component={WarningsScreen}
        />
        <Stack.Screen
          options={{
            title: "Departments",
          }}
          name="departments"
          component={DepartmentsScreen}
        />
        <Stack.Screen
          options={{
            title: "Directions",
          }}
          name="directions"
          component={DirectionsScreen}
        />
        <Stack.Screen
          options={{
            title: "Notifications",
          }}
          name="notifications"
          component={NotificationsScreen}
        />
        <Stack.Screen
          options={{
            title: "Groups",
          }}
          name="groups"
          component={GroupsScreen}
        />
        <Stack.Screen
          options={{
            title: "Activity",
          }}
          name="activities"
          component={ActivitiesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
