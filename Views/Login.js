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
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const wd = Dimensions.get("window").width;
const ht = Dimensions.get("window").height;

function Login() {
  const [phoneno, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [seepassword, setSeePassword] = useState(true);
  return (
    <View>
      <StatusBar />
      {/*Heading Sections Starts */}
      <View style={styles.heading}>
        {/* back button Section starts */}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: wd * 0.02,
            // backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ flex: 1 }}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,
              alignItems: "center",
              //   backgroundColor: "blue"
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                textAlign: "left",
                // backgroundColor: "red",
                paddingRight: wd * 0.22,
              }}
            >
              8/8
            </Text>
          </View>
        </View>
        {/* Back button Scetion Ends */}

        {/* Text Section Starts */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingLeft: wd * 0.03,
            paddingRight: wd * 0.03,
            paddingBottom: ht * 0.02,
          }}
        >
          <View style={{ marginBottom: ht * 0.01 }}>
            <Text style={{ fontWeight: "700", fontSize: ht * 0.025 }}>
              Login/Register
            </Text>
          </View>
          <View>
            <Text>Enter phone number and password.</Text>
          </View>
        </View>
        {/* Text Section Ends */}
      </View>
      {/*Heading Sections ends */}

      {/* Form Container Starts */}
      <View style={{ alignItems: "center", marginTop: ht * 0.01 }}>
        {/* Form Starts */}
        <View
          style={{
            width: wd * 0.95,
            // backgroundColor: "red",
            elevation: 5,
            backgroundColor: "white",
            paddingBottom: ht * 0.02,
            height: ht * 0.715,
          }}
        >
          {/* input Fields Starts */}
          <View style={{ alignItems: "center" }}>
            <View style={styles.inputView}>
              <View
                style={{
                  position: "absolute",
                  top: ht * 0.036,
                  left: wd * 0.008,
                }}
              >
                <Image
                  style={{ width: wd * 0.055, height: ht * 0.02 }}
                  source={require("../assets/india-flag-icon-64.png")}
                />
              </View>
              <TextInput
                style={styles.formfields}
                placeholder="Phone Number"
                placeholderTextColor="black"
                onChangeText={(text) => setPhoneNo(text)}
              />
            </View>
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
            <TouchableOpacity
              style={{
                // backgroundColor: "red",
                width: wd * 0.85,
                paddingTop: ht * 0.04,
              }}
            >
              <Text style={{ color: "#008FED", textAlign: "right" }}>
                I forget my password
              </Text>
            </TouchableOpacity>
          </View>
          {/* input Fields Ends */}
          {/* Footer Section Starts */}
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                height: ht * 0.45,
                width: wd * 0.9,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 2.5,
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Want to become a rapido Captain ?{" "}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#008FED",
                      // backgroundColor: "red",
                      textAlignVertical: "center",
                      fontWeight: "700",
                      fontSize: ht * 0.017,
                    }}
                  >
                    Register here
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  paddingLeft: wd * 0.033,
                  paddingRight: wd * 0.02,
                }}
              >
                <Text style={{ fontSize: ht * 0.014, color: "#707070" }}>
                  Please read
                  <Text style={{ textDecorationLine: "underline" }}>
                    {" "}
                    Terms and conditions
                  </Text>{" "}
                  and
                  <Text style={{ textDecorationLine: "underline" }}>
                    {" "}
                    Privacy policy
                  </Text>{" "}
                  of Rapido, as you have accepted being Rapido Captain
                </Text>
              </View>
              <TouchableOpacity
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
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Footer Section Ends */}
        </View>
        {/* Form Ends */}
      </View>
      {/* Form Container Ends */}
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#FFC928",
    height: ht * 0.23,
    paddingTop: ht * 0.013,
  },
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
