import { StatusBar } from "expo-status-bar";
import { Card } from "../components";
import React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,ImageBackground
} from "react-native";
import { Colors, styles } from "./styles";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
export const bgsource="https://cdn.pixabay.com/photo/2016/01/19/17/20/snowy-1149651_640.jpg"
export const source= {
  uri:bgsource
}
export const HomeScreen = (props, { navigation }) => {
  return (
    <ImageBackground source={source} style={{
      height:deviceHeight,
      width:deviceWidth
    }}>
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor={Colors.statusBarColor}
      />
      {/* <Button title="Test" heightRatio={16} widthRatio={2} /> */}
      <View style={styles.flexCardView}>
        <Card
          useicon={true}
          iconname="directions"
          iconsize={100}
          color="aqua"
          iconfamily="materialicons"
          uri="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_960_720.jpg"
          title="Directions"
          parent="directions"
          description="Listen to and watch refreshing Holy Worships"
        />
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
        <Card
          useicon={true}
          iconname="sign-in"
          iconsize={100}
          iconfamily="fontawesome"
          uri="https://cdn.pixabay.com/photo/2015/09/24/23/17/keyboard-956465_960_720.jpg"
          title="Register"
          parent="register"
          description="Listen to and watch refreshing Holy Worships"
        />
        <Card
          useicon={true}
          iconname="house-user"
          iconsize={100}
          iconfamily="fontawesome5"
          uri="https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_960_720.jpg"
          title="Departments"
          parent="departments"
          description="Look for your Department here"
        />
        <Card
          useicon={true}
          iconname="tasks"
          iconsize={100}
          iconfamily="fontawesome5"
          uri="https://cdn.pixabay.com/photo/2016/08/04/17/10/bokeh-1569531_960_720.jpg"
          title="Pending Activity"
          parent="activities"
          description="see activities you have not yet completed"
        />
        <Card
          useicon={true}
          iconname="bell-o"
          iconsize={100}
          iconfamily="fontawesome"
          uri="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_960_720.jpg"
          title="Notifications"
          parent="notifications"
          description="Get notified of upcoming events here"
        />
        <Card
          useicon={true}
          iconname="group"
          iconsize={100}
          iconfamily="fontawesome"
          uri="https://cdn.pixabay.com/photo/2020/02/22/17/53/communication-4871245_960_720.jpg"
          title="Groups"
          parent="groups"
          description="See your groups"
        />
        <Card
          useicon={true}
          iconname="message1"
          iconsize={100}
          iconfamily="antdesign"
          uri="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Warnings"
          parent="warnings"
          description="See your warnings here"
        />
      </View>
    </View>
    </ImageBackground>
  );
};
function Button(props) {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.buttonView,
          {
            height: deviceHeight / props.heightRatio,
            width: deviceWidth / props.widthRatio,
          },
        ]}
      >
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
