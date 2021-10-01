import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthcustomInput, Button } from "../components";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
export const LoginScreen = (props) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2018/10/15/23/03/bird-3750223_960_720.jpg",
      }}
      style={styles.imagecontainer}
    >
      <View style={styles.authcontainer}>
        <View style={styles.inputsWrap}>
          <View style={styles.inputWrap}>
            <AuthcustomInput
              label="Enter Username"
              auto="username"
              onChangeFunction={() => {}}
              focus={true}
              keyboard="default"
              placeholder="Username"
              secure={false}
            />
            <AuthcustomInput
              label="Enter Password"
              auto="password"
              onChangeFunction={() => {}}
              focus={true}
              keyboard="default"
              placeholder="Your Password"
              secure={true}
            />
            <View style={styles.buttonWrap}>
              <Button heightRatio={17} widthRatio={2.4} title="Submit" />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export const RegisterScreen = (props) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2018/10/15/23/03/bird-3750223_960_720.jpg",
      }}
      style={styles.imagecontainer}
    >
      <View style={styles.authcontainer}>
        <View style={styles.inputsWrap}>
          <View style={styles.inputWrap}>
            <AuthcustomInput
              label="Enter Username"
              auto="username"
              onChangeFunction={() => {}}
              focus={true}
              keyboard="default"
              placeholder="Username"
              secure={false}
            />
            <AuthcustomInput
              label="Enter Password"
              auto="password"
              onChangeFunction={() => {}}
              focus={true}
              keyboard="default"
              placeholder="Your Password"
              secure={true}
            />
            <AuthcustomInput
              label="Confirm Password"
              auto="off"
              onChangeFunction={() => {}}
              focus={true}
              keyboard="default"
              placeholder="Your Password"
              secure={true}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
