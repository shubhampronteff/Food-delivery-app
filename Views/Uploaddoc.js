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
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Uploaddoc({ navigation }) {
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [dlno, setDlNo] = useState("");
  const [expdate, setExpDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [show, setShow] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const keyboardVerticalOffset =
    Platform.OS === "android" ? ht * 0.25 : -ht * 0.1;

  const camera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        setModalVisible(false);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  const camera1 = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage1(result.uri);
        setModalVisible1(false);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
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
      setModalVisible(false);
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
      setModalVisible1(false);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    try {
      const a = date.getMonth() + 1;
      console.log(a);
      const b = date.getDate();
      console.log(b);
      const c = date.getFullYear();
      console.log(c);
      const sel = b + "/" + a + "/" + c;
      console.log(typeof sel);
      setExpDate(sel);
      hideDatePicker();
    } catch (ex) {
      console.warn(ex.message);
    }
  };
  const handleSubmit = async () => {
    const eff = setTimeout(() => {
      setModalVisible2(false);
      navigation.navigate("Login");
    }, 5000);

    return () => {
      clearInterval(eff);
    };
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
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={{ flex: 1 }}
            >
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
                          onPress={() => setModalVisible(true)}
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
                          onPress={() => setModalVisible(true)}
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
                          onPress={() => setModalVisible1(true)}
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
                          onPress={() => setModalVisible1(true)}
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
                            source={{ uri: image1 }}
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
                        autoCapitalize="characters"
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
                        value={expdate}
                        // editable={false}
                        // onChangeText={(text) => setExpDate(text)}
                      />

                      <TouchableOpacity
                        onPress={showDatePicker}
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
                      </TouchableOpacity>
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible2(true);
                        handleSubmit();
                      }}
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
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View
              style={{
                width: wd * 1,
                height: ht * 0.3,
                backgroundColor: "#202020",
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: ht * 0.035,
                borderTopRightRadius: ht * 0.035,
              }}
            >
              <View
                style={{
                  flex: 1,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>
                  Select Source
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={camera}
                  style={{ flex: 1, alignItems: "center" }}
                >
                  <Image
                    style={{ width: wd * 0.14, height: ht * 0.07 }}
                    source={require("../assets/Rapido-logo.png")}
                  />
                  <Text style={{ color: "white" }}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={pickImage}
                  style={{ flex: 1, alignItems: "center" }}
                >
                  <Image
                    style={{ width: wd * 0.14, height: ht * 0.07 }}
                    source={require("../assets/iphoneios11fileapp.png")}
                  />
                  <Text style={{ color: "white" }}>Files</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableHighlight
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: wd * 0.75,
                    height: ht * 0.062,
                    backgroundColor: "#484848",
                    borderRadius: ht * 0.04,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "600" }}>
                    Cancel
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View
              style={{
                width: wd * 1,
                height: ht * 0.3,
                backgroundColor: "#202020",
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: ht * 0.035,
                borderTopRightRadius: ht * 0.035,
              }}
            >
              <View
                style={{
                  flex: 1,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>
                  Select Source
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={camera1}
                  style={{ flex: 1, alignItems: "center" }}
                >
                  <Image
                    style={{ width: wd * 0.14, height: ht * 0.07 }}
                    source={require("../assets/Rapido-logo.png")}
                  />
                  <Text style={{ color: "white" }}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={pickImage1}
                  style={{ flex: 1, alignItems: "center" }}
                >
                  <Image
                    style={{ width: wd * 0.14, height: ht * 0.07 }}
                    source={require("../assets/iphoneios11fileapp.png")}
                  />
                  <Text style={{ color: "white" }}>Files</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableHighlight
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: wd * 0.75,
                    height: ht * 0.062,
                    backgroundColor: "#484848",
                    borderRadius: ht * 0.04,
                  }}
                  onPress={() => {
                    setModalVisible1(!modalVisible1);
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "600" }}>
                    Cancel
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View
              style={{
                width: wd * 1,
                height: ht * 1,
                backgroundColor: "black",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.6,
              }}
            ></View>
            <View
              style={{
                width: wd * 0.8,
                height: ht * 0.2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: ht * 0.005,
                position: "absolute",
                top: ht * 0.4,
                left: wd * 0.1,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Loading</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "700" }}>Please Wait...</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            </View>
          </Modal>
        </View>
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
