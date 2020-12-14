import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./Views/SignUp";
import Login from "./Views/Login";
import Uploaddoc from "./Views/Uploaddoc";
import Cam from "./Views/Cam";
import Home from "./Views/Home";
import CustomDrawer from "./Views/CustomDrawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Uploaddoc" component={Uploaddoc} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
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

function HomeDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      initialRouteName="Home"
      drawerContent={() => <CustomDrawer navigation={navigation} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
