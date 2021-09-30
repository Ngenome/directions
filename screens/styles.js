import { Dimensions, StyleSheet } from "react-native";

var backgroundColor = "#0b0c2b";
var topTextColor = "aqua";
var borderBottomColor = "red";
var CardTitleColor = "#94ffb8";
var CardTextColor = "white";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const Colors = {
  mainBackgroundColor: "rgba(0,0,0,0.9)",
  shadowStartColor: "#2e7528",
  shadowEndColor: "transparent",
  buttonBackground: "purple",
  iconColor: "#34b004",
  headerBackground: "rgb(0,0,0)",
  headerTextColor: "aqua",
  iconViewBackgroundColor: "#13102e",
  statusBarColor: "#303461",
  textinputBackground:"transparent",
  textinputCoverBackground:"rgba(0,0,0,0)",
  textBorderColor:'aqua',
  labelColor:"aqua",
  textinputColor:"white",
  textinputPlaceholderColor:'chartreuse',
  selectionColor:"chartreuse",
  
};
export const styles = StyleSheet.create({
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
    backgroundColor: Colors.buttonBackground,
    borderRadius: 2,
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
    color: CardTitleColor,
  },
  floatText: {
    color: CardTextColor,
  },
  blurIconContainer: {
    position: "absolute",
    zIndex: 2,
  },
  textinputCoverView:{
    height:deviceHeight/10,
    width:deviceWidth/1.1,
    backgroundColor:Colors.textinputCoverBackground,
    flexDirection:'column',
    marginTop:10,
    
    
  },
  
  textinputView:{
    height:deviceHeight/14,
    width:deviceWidth/1.1,
    borderRadius:5,
    backgroundColor:Colors.textinputBackground,
    borderColor:Colors.textBorderColor,
    borderWidth:0.4,
    
  },
  textinput:{
    height:deviceHeight/14.2,
    width:deviceWidth/1.11,
    backgroundColor:Colors.textinputBackground,
    color:Colors.textinputColor,
    
    
  },
  inputlabel:{
    color:Colors.labelColor,
    fontSize:deviceWidth/23,
    
  }
});
