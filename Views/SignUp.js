import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const wd = Dimensions.get("window").width;
const ht = Dimensions.get("window").height;

function SignUp({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [phoneno, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  console.log("CheckBox", toggleCheckBox);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
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
                2/8
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
                SignUp/Registration
              </Text>
            </View>
            <View>
              <Text>
                Enter phone number and password,we shall create an account if
                needed
              </Text>
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
                  placeholder="Confirm Password"
                  placeholderTextColor="black"
                  onChangeText={(text) => setConfirmPassword(text)}
                />
              </View>
            </View>
            {/* input Fields Ends */}
            {/* whatsapp box Starts */}
            <View
              style={{
                alignItems: "center",
                marginTop: ht * 0.035,
              }}
            >
              <View
                style={{
                  width: wd * 0.86,
                  backgroundColor: "#F5F5F5",
                  flexDirection: "row",
                  borderRadius: ht * 0.005,
                  alignItems: "center",
                  elevation: 6,
                  height: ht * 0.07,
                }}
              >
                <View style={{ flex: 1 }}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                </View>
                <View style={{ flex: 6 }}>
                  <Text style={{ color: "#707070" }}>
                    Receive account updates on
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 3,
                  }}
                >
                  <MaterialCommunityIcons
                    name="whatsapp"
                    size={24}
                    color="#505050"
                  />
                  <Text
                    style={{
                      textAlignVertical: "center",
                      color: "#505050",
                      fontWeight: "700",
                    }}
                  >
                    WhatsApp
                  </Text>
                </View>
              </View>
            </View>
            {/* whatsapp box Ends */}
            {/* Footer Section Starts */}
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  height: ht * 0.33,
                  width: wd * 0.9,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flex: 2,
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
                      You are an existing Rapido Captain ?{" "}
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
                      Log in here
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
                    By accepting to create account,you Accept
                    <Text style={{ textDecorationLine: "underline" }}>
                      {" "}
                      Terms and conditions
                    </Text>{" "}
                    and
                    <Text style={{ textDecorationLine: "underline" }}>
                      {" "}
                      Privacy policy
                    </Text>{" "}
                    of Rapido and being Rapido Captain.
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Uploaddoc")}
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
                    Register
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
    </TouchableWithoutFeedback>
  );
}

export default SignUp;

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
