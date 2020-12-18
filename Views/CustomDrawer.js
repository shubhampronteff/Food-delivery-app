import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  Switch,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function CustomDrawer({ navigation }) {
  const [Enabled, setEnabled] = useState(false);
  const [Enabled1, setEnabled1] = useState(false);
  const toggleSwitch = () => {
    setEnabled((previousState) => !previousState);
  };
  const toggleSwitch1 = () => {
    setEnabled1((previousState) => !previousState);
  };
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {/* Profile Screen Starts */}
      <View
        style={{
          backgroundColor: "#091E15",
          height: ht * 0.15,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: ht * 0.12,
              width: wd * 0.23,
              borderRadius: ht * 0.1,
              borderColor: "white",
              borderWidth: wd * 0.004,
            }}
            source={require("../assets/bat.jpg")}
          />
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Text
            style={{ color: "white", fontWeight: "400", fontSize: ht * 0.02 }}
          >
            SHUBHAM SHARMA
          </Text>
        </View>
      </View>
      {/* Profile Screen Ends */}
      {/* Save tax Section Starts */}
      <TouchableWithoutFeedback
        onPress={() => alert("go")}
        style={{
          backgroundColor: "#36B777",
          height: ht * 0.09,
          flexDirection: "row",
        }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            style={{
              height: ht * 0.05,
              width: wd * 0.1,
              borderRadius: ht * 0.2,
            }}
            source={require("../assets/moneybag.jpg")}
          />
        </View>
        <View style={{ justifyContent: "center", flex: 2.5 }}>
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: ht * 0.021,
              }}
            >
              Save 5% tax
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", marginRight: wd * 0.04 }}>
              on every order
            </Text>
            <AntDesign name="arrowright" size={22} color="white" />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* Save tax Section Ends */}
      <View
        style={{
          height: ht * 0.737,
          marginBottom: ht * 0.02,
        }}
      >
        {/* ScrollView Starts */}
        <ScrollView>
          {/* ID Card Starts */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen1")}
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              height: ht * 0.08,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="id-card" size={18} color="#5A5A5A" />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.05,
                  height: ht * 0.018,
                  position: "absolute",
                  top: ht * 0.03,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                ID-Card
              </Text>
            </View>
          </TouchableOpacity>
          {/* ID Card Ends */}
          {/* Earnings Starts */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              height: ht * 0.08,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="wallet" size={21} color="#5A5A5A" />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.034,
                  height: ht * 0.014,
                  position: "absolute",
                  top: ht * 0.032,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Payment History
              </Text>
            </View>
          </TouchableOpacity>
          {/* Earnings Ends */}
          {/* Incentives Starts */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              height: ht * 0.08,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="contacts" size={20} color="#5A5A5A" />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.034,
                  height: ht * 0.015,
                  position: "absolute",
                  top: ht * 0.032,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Orders
              </Text>
            </View>
          </TouchableOpacity>
          {/* Incentives Ends */}
          {/*     
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              height: ht * 0.08,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="bag-checked"
                size={24}
                color="#5A5A5A"
              />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.034,
                  height: ht * 0.013,
                  position: "absolute",
                  top: ht * 0.033,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Service manager
              </Text>
            </View>
          </TouchableOpacity>
      
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              height: ht * 0.08,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="message" size={20} color="#5A5A5A" />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.034,
                  height: ht * 0.015,
                  position: "absolute",
                  top: ht * 0.031,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Refer a friend
              </Text>
            </View>
          </TouchableOpacity>
       
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              height: ht * 0.08,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="hand-holding-usd" size={22} color="#5A5A5A" />
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Welfare Program
              </Text>
            </View>
          </TouchableOpacity>
          */}
          {/* Help/Support Starts */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: ht * 0.08,
              borderBottomWidth: wd * 0.003,
              borderBottomColor: "#D3D3D3",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="help-with-circle" size={20} color="#5A5A5A" />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.034,
                  height: ht * 0.018,
                  position: "absolute",
                  top: ht * 0.03,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Help/Support
              </Text>
            </View>
          </TouchableOpacity>
          {/* Help/Support Ends */}
          {/* Shortcuts Section Starts */}
          <View
            style={{
              // backgroundColor: "red",
              height: ht * 0.06,
              justifyContent: "center",
              paddingLeft: wd * 0.05,
            }}
          >
            <Text style={{ color: "#989898" }}>Shortcuts</Text>
          </View>
          {/* My Route Booking Starts */}
        {/*   <View
            style={{
              flexDirection: "row",
              height: ht * 0.07,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="ticket-alt" size={20} color="#5A5A5A" />
              <View
                style={{
                  backgroundColor: "#FFC928",
                  width: wd * 0.045,
                  height: ht * 0.018,
                  position: "absolute",
                  top: ht * 0.026,
                  zIndex: -1,
                }}
              ></View>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                My Route Booking
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#B4E1CA" }}
                thumbColor={Enabled ? "#22A363" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={Enabled}
              />
            </View>
          </View>
        
          <View
            style={{
              flexDirection: "row",
              height: ht * 0.07,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="refresh" size={20} color="#5A5A5A" />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: ht * 0.023,
                  textAlignVertical: "top",
                }}
              >
                Auto Accept orders
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#B4E1CA" }}
                thumbColor={Enabled1 ? "#22A363" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={Enabled1}
              />
            </View>
          </View>
          */}
          {/* Buttons Started */}
          <View
            style={{
              height: ht * 0.08,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Arrived")}
              style={{
                width: wd * 0.4,
                backgroundColor: "#2B72EE",
                justifyContent: "center",
                alignItems: "center",
                height: ht * 0.05,
                borderRadius: ht * 0.005,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>ARRIVED</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: ht * 0.08,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: ht * 0.02,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.push("Home", { screen: "AcceptRide" })}
              style={{
                width: wd * 0.4,
                backgroundColor: "#FFC928",
                justifyContent: "center",
                alignItems: "center",
                height: ht * 0.05,
                borderRadius: ht * 0.005,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                Accept Order
              </Text>
            </TouchableOpacity>
          </View>
          {/* Buttons Ended */}
          {/* Shortcuts Section Ends */}
        </ScrollView>
      </View>
      {/* ScrollView Ends */}
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({});
