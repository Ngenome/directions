import { Dimensions, StyleSheet } from "react-native";
// import { ButtonHeight } from "../components";

var backgroundColor = "red";
var topTextColor = "aqua";
var borderBottomColor = "red";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const Colors = {
  CardTitleColor: "#ffdfbf",
  CardTextColor: "#fff3e8",
  mainBackgroundColor: "rgba(0,0,0,0.85)",
  authBackgroundColor: "rgba(0,0,0,0.6)",
  shadowStartColor: "#5e574e",
  shadowEndColor: "transparent",
  buttonBackground: "rgba(230, 149, 69,0.6)",
  iconColor: "#b38f60",
  headerBackground: "rgb(0,0,0)",
  headerTextColor: "#ffe8d1",
  iconViewBackgroundColor: "rgba(28, 22, 12,0.9)",
  statusBarColor: "#303461",
  textinputBackground: "transparent",
  textinputCoverBackground: "rgba(0,0,0,0)",
  textBorderColor: "#ffdfbf",
  labelColor: "#ffeddb",
  textinputColor: "white",
  textinputPlaceholderColor: "#fff7f0",
  selectionColor: "chartreuse",
};
export const styles = StyleSheet.create({
  imagecontainer: {
    height: deviceHeight,
    width: deviceWidth,
  },
  authcontainer: {
    flex: 1,
    backgroundColor: Colors.authBackgroundColor,
  },
  inputsWrap: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    flex: 0.7,
  },
  screentitle: {
    flexDirection: "row",

    flex: 1,
    width: windowWidth / 1.3,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  homescreentitle: {
    flexDirection: "row",

    flex: 1,
    width: windowWidth / 1.1,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  titletext: {
    color: Colors.headerTextColor,
    fontSize: windowWidth / 25,
  },
  shadowCover: { marginBottom: 20 },
  icon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth / 2.34,
    height: windowHeight / 5.05,
  },
  flexCardView: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColor,
  },
  buttonView: {
    margin: 3,
    backgroundColor: Colors.buttonBackground,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
  },
  buttonWrap: {
    marginTop: 10,
    width: deviceWidth / 1.02,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  topView: {},
  topText: {
    color: topTextColor,
    textAlign: "center",
    borderBottomColor: borderBottomColor,
    borderWidth: 2,
  },
  CardBackgroundImage: {
    marginRight: 5,

    height: windowHeight / 5,
    width: windowWidth / 2.3,
    borderRadius: 10,

    overflow: "hidden",
  },
  CardBackgroundView: {
    height: windowHeight / 5,
    backgroundColor: Colors.iconViewBackgroundColor,
    width: 140,
    borderRadius: 10,
    position: "relative",

    overflow: "hidden",
  },
  CardView: {
    height: 100,
    width: 100,
  },
  absolute: {
    position: "absolute",
  },
  CardTitle: {
    color: Colors.CardTitleColor,
  },
  floatText: {
    color: Colors.CardTextColor,
  },
  blurIconContainer: {
    position: "absolute",
    zIndex: 2,
  },
  textinputCoverView: {
    height: deviceHeight / 10,
    width: deviceWidth / 1.1,
    backgroundColor: Colors.textinputCoverBackground,
    flexDirection: "column",
    marginTop: 10,
  },

  textinputView: {
    height: deviceHeight / 14,
    width: deviceWidth / 1.1,
    borderRadius: 5,
    backgroundColor: Colors.textinputBackground,
    borderColor: Colors.textBorderColor,
    borderWidth: 0.4,
  },
  textinput: {
    height: deviceHeight / 14.2,
    width: deviceWidth / 1.11,
    backgroundColor: Colors.textinputBackground,
    color: Colors.textinputColor,
  },
  inputlabel: {
    color: Colors.labelColor,
    fontSize: deviceWidth / 23,
  },
});
