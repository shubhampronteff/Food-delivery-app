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
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function TodayDelivery({ navigation }) {
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
              Deliveries
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
            <Text style={{ color: "grey" }}>Show all</Text>
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
              height: ht * 0.15,
              borderRadius: ht * 0.01,
              flexDirection: "row",
              paddingTop: ht * 0.02,
              elevation: 5,
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <Ionicons name="md-radio-button-on" size={22} color="#FB163F" />
            </View>
            <View
              style={{
                flex: 6,
              }}
            >
              <View style={{ paddingRight: wd * 0.12, flex: 1 }}>
                <Text
                  style={{
                    fontSize: ht * 0.02,
                    color: "#008FED",
                    fontWeight: "bold",
                  }}
                >
                  #473
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "700", fontSize: ht * 0.021 }}>
                  2x Chicken Nuggets
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 8 }}>
                  <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                    Cash on delivery
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#00B951", fontWeight: "bold" }}>
                  $57.70
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => alert("Work in Progress...")}
                style={{ flex: 2 }}
              >
                <Entypo name="chevron-small-right" size={24} color="grey" />
              </TouchableOpacity>
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
              elevation: 5,
              marginTop: ht * 0.02,
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <Ionicons name="md-radio-button-on" size={22} color="#00B951" />
            </View>
            <View
              style={{
                flex: 6,
              }}
            >
              <View style={{ paddingRight: wd * 0.12, flex: 1 }}>
                <Text
                  style={{
                    fontSize: ht * 0.02,
                    color: "#008FED",
                    fontWeight: "bold",
                  }}
                >
                  #332
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "700", fontSize: ht * 0.021 }}>
                  1x Caramel Frappuccino
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 8 }}>
                  <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                    Cash on delivery
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#00B951", fontWeight: "bold" }}>
                  $53.00
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => alert("Work in Progress...")}
                style={{ flex: 2 }}
              >
                <Entypo name="chevron-small-right" size={24} color="grey" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* Second Card Ends */}
          {/* Third Card Starts */}
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: wd * 0.88,
              height: ht * 0.15,
              borderRadius: ht * 0.01,
              flexDirection: "row",
              paddingTop: ht * 0.02,
              elevation: 5,
              marginTop: ht * 0.02,
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <Ionicons name="md-radio-button-on" size={22} color="#FB163F" />
            </View>
            <View
              style={{
                flex: 6,
              }}
            >
              <View style={{ paddingRight: wd * 0.12, flex: 1 }}>
                <Text
                  style={{
                    fontSize: ht * 0.02,
                    color: "#008FED",
                    fontWeight: "bold",
                  }}
                >
                  #336
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "700", fontSize: ht * 0.021 }}>
                  1x Caramel Frappuccino
                </Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 8 }}>
                  <Text style={{ color: "#A0A0A0", fontSize: ht * 0.018 }}>
                    Cash on delivery
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#00B951", fontWeight: "bold" }}>
                  $33.00
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => alert("Work in Progress...")}
                style={{ flex: 2 }}
              >
                <Entypo name="chevron-small-right" size={24} color="grey" />
              </TouchableOpacity>
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

export default TodayDelivery;

const styles = StyleSheet.create({});
