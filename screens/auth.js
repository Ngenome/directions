import { StatusBar } from "expo-status-bar";
import React from "react";
import {AuthcustomInput} from '../components'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
export const LoginScreen = (props) => {
  return <View style={styles.container}>
  <AuthcustomInput
  label='Enter Username'
  auto='username'
  onChangeFunction={()=>{
    
  }}
  focus={true}
  keyboard='default'
  placeholder='Username'
  secure={false}
  
  />
    <AuthcustomInput
    label='Enter Password'
    auto='password'
    onChangeFunction={()=>{
      
    }}
    focus={true}
    keyboard='default'
    placeholder='Your Password'
    secure={true}
    
    />
  </View>;
};
export const RegisterScreen = (props) => {
  return <View style={styles.container}>
   <AuthcustomInput
  label='Enter Username'
  auto='username'
  onChangeFunction={()=>{
    
  }}
  focus={true}
  keyboard='default'
  placeholder='Username'
  secure={false}
  
  />
    <AuthcustomInput
    label='Enter Password'
    auto='password'
    onChangeFunction={()=>{
      
    }}
    focus={true}
    keyboard='default'
    placeholder='Your Password'
    secure={true}
    
    />
     <AuthcustomInput
        label='Confirm Password'
        auto='off'
        onChangeFunction={()=>{
          
        }}
        focus={true}
        keyboard='default'
        placeholder='Your Password'
        secure={true}
        
        />
  </View>;
};
