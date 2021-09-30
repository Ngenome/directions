import { useNavigation } from "@react-navigation/core";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./screens/styles";
import React from "react";
import { Shadow } from "react-native-shadow-2";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "./screens/styles";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  AntDesign,
  Fontisto,
  Octicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const iconColor = Colors.iconColor;
export const AuthcustomInput = (props) => {
  return (
    <View style={styles.textinputCoverView}>
    <Text style={styles.inputlabel}>{props.label}</Text>
    <View style={styles.textinputView}>
      <TextInput style={styles.textinput}
      autoCompleteType={props.auto!== undefined?props.auto:'off'}
      multiline={false}
      onChangeText={()=>{
        props.onChangeFunction
      }}
      autoCorrect={false}
      autoFocus={props.focus!==undefined?props.focus:false}
      underlineColorAndroid='transparent'
      keyboardType={props.keyboard!==undefined?props.keyboard:'default'}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderColor!==undefined?props.placeholderColor:Colors.textinputPlaceholderColor}
      secureTextEntry={props.secure!==undefined?props.secure:false}
      selectionColor={props.selectionColor!==undefined?props.selectionColor:Colors.selectionColor}
      
      />
      </View>
    </View>
  );
};
  
export function Card(props) {
  const Blur = React.useRef(null);
  const navigation = useNavigation();
  if (props.useicon) {
    return (
      <TouchableOpacity
        style={styles.shadowCover}
        onPress={() => navigation.navigate(props.parent)}
      >
        <Shadow
          distance={7}
          paintInside={false}
          startColor={Colors.shadowStartColor}
          finalColor={Colors.shadowEndColor}
          offset={[0.0, 0]}
        >
          <View style={styles.CardBackgroundView}>
            <View style={styles.icon}>
              <IconSelector
                name={props.iconname}
                family={props.iconfamily}
                size={props.iconsize}
                color={props.iconcolor}
              />
            </View>
            <BlurView
              intensity={20}
              tint="dark"
              style={styles.blurIconContainer}
            >
              <View style={styles.CardView}>
                <View style={styles.topCardView}>
                  <Text style={styles.CardTitle}>{props.title}</Text>
                </View>

                <View style={styles.floatView}>
                  <Text style={styles.floatText}>{props.description}</Text>
                </View>
              </View>
            </BlurView>
          </View>
        </Shadow>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.parent)}>
      <ImageBackground
        style={styles.CardBackgroundImage}
        source={{
          uri: props.uri,
        }}
      >
        <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
          <View style={styles.CardView}>
            <View style={styles.topCardView}>
              <Text style={styles.CardTitle}>{props.title}</Text>
            </View>

            <View style={styles.floatView}>
              <Text style={styles.floatText}>{props.description}</Text>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  );
}
export function IconSelector(props) {
  const iconmaincolor = props.color != null ? props.color : Colors.iconColor;
  const { options, ...rest } = props;
  if (
    /fontawesome5/.test(props.family, "i") == true &&
    props.family.toUpperCase() == "FONTAWESOME5"
  ) {
    return (
      <FontAwesome5 name={props.name} size={props.size} color={iconmaincolor} />
    );
  }
  if (/ionicons/.test(props.family, "i") == true) {
    return (
      <Ionicons name={props.name} size={props.size} color={iconmaincolor} />
    );
  }
  if (
    /fontawesome/.test(props.family, "i") == true &&
    props.family.toUpperCase() == "FONTAWESOME"
  ) {
    return (
      <FontAwesome name={props.name} size={props.size} color={iconmaincolor} />
    );
  }
  if (/materialicons/.test(props.family, "i") == true) {
    return (
      <MaterialIcons
        name={props.name}
        size={props.size}
        color={iconmaincolor}
      />
    );
  }
  if (/materialcommunityicons/.test(props.family, "i") == true) {
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={props.size}
        color={iconmaincolor}
      />
    );
  }
  if (/entypo/.test(props.family, "i") == true) {
    return <Entypo name={props.name} size={props.size} color={iconmaincolor} />;
  }
  if (/antdesign/.test(props.family, "i") == true) {
    return (
      <AntDesign name={props.name} size={props.size} color={iconmaincolor} />
    );
  }
  if (/fontisto/.test(props.family, "i") == true) {
    return (
      <Fontisto name={props.name} size={props.size} color={iconmaincolor} />
    );
  }
  if (/octicons/.test(props.family, "i") == true) {
    return (
      <Octicons name={props.name} size={props.size} color={iconmaincolor} />
    );
  }
}
