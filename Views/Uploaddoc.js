import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Uploaddoc() {
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [dlno, setDlNo] = useState("");
  const [expdate, setExpDate] = useState("");
  const keyboardVerticalOffset =
    Platform.OS === "android" ? ht * 0.25 : -ht * 0.1;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage1(result.uri);
    }
  };
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
                6/8
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
                Upload your Driving License(DL)
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: ht * 0.017 }}>
                This Document will be required for your verification.
              </Text>
            </View>
          </View>
          {/* Text Section Ends */}
        </View>
        {/*Heading Sections ends */}

        {/* ScrollView Starts */}
        <View
          style={{
            height: ht * 0.737,
            marginBottom: ht * 0.02,
          }}
        >
          <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior="position"
          >
            <ScrollView style={{}}>
              <View
                style={{
                  alignItems: "center",
                  paddingTop: ht * 0.04,
                  // height: ht * 0.65,
                  marginBottom: ht * 0.02,
                }}
              >
                <View
                  style={{
                    width: wd * 0.9,
                    backgroundColor: "white",
                    elevation: 5,
                    paddingTop: ht * 0.02,
                    borderRadius: ht * 0.005,
                  }}
                >
                  {/* first container text starts */}
                  <View
                    style={{
                      paddingLeft: wd * 0.06,
                      // backgroundColor: "red",
                    }}
                  >
                    <Text> Upload Driving License picture</Text>
                    <Text style={{ fontStyle: "italic", color: "#686868" }}>
                      (Learner's License not allowed)
                    </Text>
                  </View>
                  {/* first container text starts */}
                  {/* Camera starts */}
                  <View style={{}}>
                    {/* Fornt picture starts */}
                    <View
                      style={{
                        alignItems: "center",
                        marginTop: ht * 0.02,
                        marginBottom: ht * 0.005,
                      }}
                    >
                      {image == null ? (
                        <TouchableOpacity
                          onPress={pickImage}
                          style={{
                            width: wd * 0.73,
                            backgroundColor: "#E8E8E8",
                            height: ht * 0.24,
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#989898",
                            borderRadius: ht * 0.002,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesome5
                            name="camera"
                            size={24}
                            color="#989898"
                          />
                          <Text style={{ color: "#989898" }}>
                            Front Picture
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={pickImage}
                          style={{
                            width: wd * 0.73,
                            backgroundColor: "#E8E8E8",
                            height: ht * 0.24,
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#989898",
                            borderRadius: ht * 0.002,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={{ uri: image }}
                            style={{ width: wd * 0.73, height: ht * 0.24 }}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    {/* Fornt picture Ends */}
                    {/* Back picture starts */}

                    <View
                      style={{
                        alignItems: "center",
                        marginTop: ht * 0.02,
                        marginBottom: ht * 0.025,
                      }}
                    >
                      {image1 == null ? (
                        <TouchableOpacity
                          onPress={pickImage}
                          style={{
                            width: wd * 0.73,
                            backgroundColor: "#E8E8E8",
                            height: ht * 0.24,
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#989898",
                            borderRadius: ht * 0.002,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesome5
                            name="camera"
                            size={24}
                            color="#989898"
                          />
                          <Text style={{ color: "#989898" }}>Back Picture</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={pickImage1}
                          style={{
                            width: wd * 0.73,
                            backgroundColor: "#E8E8E8",
                            height: ht * 0.24,
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderColor: "#989898",
                            borderRadius: ht * 0.002,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={{ uri: image }}
                            style={{ width: wd * 0.73, height: ht * 0.24 }}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    {/* Fornt picture Ends */}
                  </View>
                  {/* Camera Ends */}
                </View>
                {/* TextFields starts */}
                <View
                  style={{
                    width: wd * 0.9,
                    backgroundColor: "white",
                    elevation: 5,
                    paddingTop: ht * 0.02,
                    borderRadius: ht * 0.005,
                    marginTop: ht * 0.02,
                    // marginBottom: ht * 0.01,
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <View>
                      <TextInput
                        placeholder="Driving License Number"
                        placeholderTextColor="black"
                        style={styles.inputfields}
                        selectionColor="black"
                        onChangeText={(text) => setDlNo(text)}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: wd * 0.02,
                          top: ht * 0.02,
                        }}
                      >
                        <Feather name="info" size={24} color="#404040" />
                      </View>
                      <Text
                        style={{
                          color: "#989898",
                          fontSize: ht * 0.017,
                          marginTop: ht * 0.004,
                        }}
                      >
                        Ex:KA12345678900987
                      </Text>
                    </View>
                    <View style={{ marginBottom: ht * 0.04 }}>
                      <TextInput
                        placeholder="Driving License Expiry date"
                        placeholderTextColor="black"
                        style={styles.inputfields}
                        selectionColor="white"
                        onChangeText={(text) => setExpDate(text)}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: wd * 0.02,
                          top: ht * 0.02,
                        }}
                      >
                        <MaterialCommunityIcons
                          name="calendar-range"
                          size={24}
                          color="#404040"
                        />
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#FFC928",
                        width: wd * 0.8,
                        height: ht * 0.06,
                        borderRadius: ht * 0.008,
                        marginBottom: ht * 0.03,
                      }}
                    >
                      <Text
                        style={{
                          textAlignVertical: "center",
                          textAlign: "center",
                          height: ht * 0.06,
                          color: "black",
                          fontSize: ht * 0.022,
                        }}
                      >
                        SUBMIT
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* TextFields Ends */}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        {/* ScrollView Ends */}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Uploaddoc;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#FFC928",
    height: ht * 0.23,
    paddingTop: ht * 0.013,
    zIndex: 1,
  },
  inputfields: {
    borderBottomWidth: wd * 0.004,
    width: wd * 0.8,
    height: ht * 0.07,
    paddingLeft: wd * 0.008,
    fontWeight: "400",
    paddingTop: ht * 0.028,
  },
});
