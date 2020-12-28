import React from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Notification({ navigation }) {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#E0E0E0" />
      {/* Main View Starts */}
      <View style={{ backgroundColor: "#E0E0E0", height: ht * 0.97 }}>
        {/* Heading Starts */}
        <View
          style={{
            flexDirection: "row",
            height: ht * 0.07,
            marginBottom: ht * 0.01,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: wd * 0.02,
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: ht * 0.028 }}>
              Notification
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              elevation: 5,
            }}
          >
            <Text style={{ color: "grey" }}>Filter</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: wd * 0.08,
                elevation: 5,
                borderRadius: ht * 0.005,
                marginRight: wd * 0.04,
                marginLeft: wd * 0.02,
              }}
            >
              <MaterialIcons name="filter-list" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Heading Ends */}

        {/* Cards section Starts */}
        <View style={{ alignItems: "center" }}>
          {/* First Card Starts */}
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: wd * 0.88,
              height: ht * 0.17,
              borderRadius: ht * 0.01,
              flexDirection: "row",
              paddingTop: ht * 0.02,
              elevation: 5,
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#00B951",
                  width: wd * 0.13,
                  height: ht * 0.063,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ht * 0.05,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-check"
                  size={24}
                  color="white"
                />
              </View>
            </View>
            <View
              style={{
                flex: 8,
              }}
            >
              <View style={{ paddingRight: wd * 0.12, flex: 1 }}>
                <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                  You Have Successfully delivered to order{" "}
                  <Text style={{ color: "#008FED" }}>#350</Text>
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "700", fontSize: ht * 0.021 }}>
                  Iced Pineapple.
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 8 }}>
                  <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                    June 9, 2020 7:46am
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Octicons name="primitive-dot" size={20} color="green" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* First Card Ends */}

          {/* Second Card Starts */}
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: wd * 0.88,
              height: ht * 0.15,
              borderRadius: ht * 0.01,
              flexDirection: "row",
              paddingTop: ht * 0.02,
              marginTop: ht * 0.02,
              elevation: 5,
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#FB163F",
                  width: wd * 0.13,
                  height: ht * 0.063,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ht * 0.05,
                }}
              >
                <AntDesign name="adduser" size={24} color="white" />
              </View>
            </View>
            <View
              style={{
                flex: 8,
              }}
            >
              <View style={{ paddingRight: wd * 0.12, flex: 1 }}>
                <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                  You Have Assigned to order{" "}
                  <Text style={{ color: "#008FED" }}>#350</Text>
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <Text style={{ fontWeight: "700", fontSize: ht * 0.021 }}>
                  Iced Pineapple.
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 8 }}>
                  <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                    June 9, 2020 7:30am
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Second Card Ends */}
          {/* Third Card Starts */}
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: wd * 0.88,
              height: ht * 0.17,
              borderRadius: ht * 0.01,
              flexDirection: "row",
              paddingTop: ht * 0.02,
              marginTop: ht * 0.02,
              elevation: 5,
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#00B951",
                  width: wd * 0.13,
                  height: ht * 0.063,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ht * 0.05,
                }}
              >
                <MaterialCommunityIcons
                  name="truck-check"
                  size={24}
                  color="white"
                />
              </View>
            </View>
            <View
              style={{
                flex: 8,
              }}
            >
              <View style={{ paddingRight: wd * 0.12, flex: 1 }}>
                <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                  You Have Successfully delivered to order{" "}
                  <Text style={{ color: "#008FED" }}>#348</Text>
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "700", fontSize: ht * 0.021 }}>
                  Iced Pineapple.
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 8 }}>
                  <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                    June 9, 2020 7:22am
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Octicons name="primitive-dot" size={20} color="green" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Third Card Ends */}
        </View>
        {/* Cards Section Ends */}
      </View>
      {/* Mian View Ends */}
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({});
