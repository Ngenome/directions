import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../components";
import { styles } from "./styles";
export const DirectionsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card
        useicon={true}
        iconname="login"
        iconsize={100}
        iconfamily="antdesign"
        uri="https://cdn.pixabay.com/photo/2021/03/11/23/17/padlock-6088315_960_720.png"
        title="Login"
        parent="login"
        description="Get live updates"
      />
    </View>
  );
};
