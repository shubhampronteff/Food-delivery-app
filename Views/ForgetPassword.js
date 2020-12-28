import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const wd = Dimensions.get("window").width;
const ht = Dimensions.get("window").height;

function ForgetPassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [seepassword, setSeePassword] = useState(true);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ justifyContent: "center", flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        {/* Form Container Starts */}
        <View
          style={{
            alignItems: "center",
            marginTop: ht * 0.01,
            justifyContent: "center",
          }}
        >
          {/* input Fields Starts */}
          <View style={{ alignItems: "center" }}>
            <View style={styles.inputView}>
              <View
                style={{
                  position: "absolute",
                  top: ht * 0.036,
                  left: -wd * 0.005,
                }}
              >
                <EvilIcons name="lock" size={24} color="black" />
              </View>
              <TextInput
                style={styles.formfields}
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={seepassword}
              />
              <View
                style={{
                  position: "absolute",
                  top: ht * 0.02,
                  right: wd * 0.03,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (seepassword === true) {
                      setSeePassword(false);
                    } else {
                      setSeePassword(true);
                    }
                  }}
                >
                  {seepassword === true ? (
                    <AntDesign name="eye" size={30} color="grey" />
                  ) : (
                    <Entypo name="eye-with-line" size={24} color="grey" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* input Fields Ends */}
          {/* Footer Section Starts */}
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                height: ht * 0.1,
                width: wd * 0.9,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.8,
                  height: ht * 0.06,
                  borderRadius: ht * 0.008,
                }}
              >
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    height: ht * 0.06,
                    color: "#A0A0A0",
                    fontSize: ht * 0.022,
                  }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Footer Section Ends */}
        </View>
        {/* Form Container Ends */}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ForgetPassword;
const styles = StyleSheet.create({
  formfields: {
    borderBottomWidth: wd * 0.005,
    width: wd * 0.85,
    height: ht * 0.07,
    paddingLeft: wd * 0.1,
    fontWeight: "700",
    paddingTop: ht * 0.028,
  },
  inputView: {
    marginTop: ht * 0.017,
  },
});
