import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./Views/SignUp";
import Login from "./Views/Login";
import Uploaddoc from "./Views/Uploaddoc";
import Cam from "./Views/Cam";
export default function App() {
  return (
    <View style={styles.container}>
      <Uploaddoc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
