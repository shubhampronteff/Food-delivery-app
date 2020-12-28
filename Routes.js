import React from "react";
import SignUp from "./Views/SignUp";
import Login from "./Views/Login";
import Home from "./Views/Home";
import Uploaddoc from "./Views/Uploaddoc";
import CustomDrawer from "./Views/CustomDrawer";
import Screen1 from "./Views/Screen1";
import AcceptRide from "./Views/AcceptRide";
import Arrived from "./Views/Arrived";
import Notification from "./Views/Notification";
import TotalDelivery from "./Views/TotalDelivery";
import CancelDelivery from "./Views/CancelDelivery";
import TodayDelivery from "./Views/TodayDelivery";
import ForgetPassword from "./Views/ForgetPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Uploaddoc" component={Uploaddoc} />
        <Stack.Screen name="Home" component={HomeDrawer} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="TotalDelivery" component={TotalDelivery} />
        <Stack.Screen name="TodayDelivery" component={TodayDelivery} />
        <Stack.Screen name="CancelDelivery" component={CancelDelivery} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

function HomeDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <CustomDrawer navigation={navigation} />}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Arrived" component={Arrived} />
      <Drawer.Screen name="AcceptRide" component={AcceptRide} />
    </Drawer.Navigator>
  );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Home} />
    </Stack.Navigator>
  );
}
