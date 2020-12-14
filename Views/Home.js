import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MapView, { Marker, Circle } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Home({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [coords, setCoords] = useState({
    latitude: 17.4387,
    longitude: 78.3946,
  });
  const [region, setRegion] = useState({
    latitude: 17.385,
    longitude: 78.4867,
    latitudeDelta: 0.006,
    longitudeDelta: 0.005,
  });
  const [coordinates, setCoordinates] = useState({
    latitude: 28.6139,
    longitude: 77.216721,
  });

  console.log(DrawerActions);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };
  console.log(navigation);

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {/* Header Starts */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="bars" size={24} color="#000000" />
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: ht * 0.002,
              borderColor: isEnabled ? "#22A363" : "#B2B2B2",
              backgroundColor: isEnabled ? "white" : "smokewhite",
              width: wd * 0.45,
              height: ht * 0.055,
              borderRadius: ht * 0.03,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              {isEnabled == true ? (
                <Text
                  style={{
                    color: "#22A363",
                    fontWeight: "600",
                    fontSize: ht * 0.023,
                  }}
                >
                  ON DUTY
                </Text>
              ) : (
                <Text
                  style={{
                    color: "#B2B2B2",
                    fontWeight: "600",
                    fontSize: ht * 0.023,
                  }}
                >
                  OFF DUTY
                </Text>
              )}
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Switch
                trackColor={{ false: "#767577", true: "#B4E1CA" }}
                thumbColor={isEnabled ? "#22A363" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => alert("In Progress...")}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="bell" size={24} color="#515151" />
        </TouchableOpacity>
      </View>
      {/* Header Ends */}

      {/* Earning Header Starts */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#515151",
          height: ht * 0.064,
          elevation: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: ht * 0.021,
              marginLeft: wd * 0.01,
            }}
          >
            Today's Earnings
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "600", fontSize: ht * 0.021 }}
          >
            <FontAwesome name="rupee" size={14} color="white" /> 0.0
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => alert("In Progress...")}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: wd * 0.02,
          }}
        >
          <MaterialIcons name="arrow-drop-down" size={28} color="white" />
        </TouchableOpacity>
      </View>
      {/* Earning Haeder Ends */}
      {/* Live Section Starts */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#36B777",
          height: ht * 0.065,
          elevation: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: wd * 0.05,
              height: ht * 0.025,
              position: "absolute",
              borderRadius: ht * 0.02,
            }}
          ></View>
          <Feather name="clock" size={24} color="black" />
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Text
            style={{ color: "white", fontWeight: "300", fontSize: ht * 0.017 }}
          >
            Incentive time started
          </Text>
          <Text style={{ color: "white", fontWeight: "700" }}>1 hr 50 min</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => alert("live in Progress")}
            style={{
              backgroundColor: "#FFC928",
              width: wd * 0.145,
              height: ht * 0.037,
              borderRadius: ht * 0.004,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Live</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Live Section Ends */}
      {/* Toggle Section Starts */}
      {isEnabled == true ? (
        <View>
          <MapView
            provider="google"
            region={region}
            // onRegionChange={onRegionChange}
            //onRegionChangeComplete={(region) => setRegion(region)}
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followUserLocation={true}
            zoomControlEnabled={true}
          >
            <Marker coordinate={coordinates} pinColor="green" />
            {/* <Circle center={coords} radius={50} fillColor="transparent" /> */}
          </MapView>
          <View
            style={{
              width: wd * 1,
              height: ht * 0.13,
              backgroundColor: "#E8E8E8",
              position: "absolute",
              bottom: 0,
              elevation: 10,
              borderTopLeftRadius: ht * 0.023,
              borderTopRightRadius: ht * 0.023,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                paddingLeft: wd * 0.04,
                paddingTop: ht * 0.015,
                //   justifyContent: "space-evenly",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: ht * 0.021 }}>
                High demand areas
              </Text>
              <Text
                style={{
                  fontWeight: "300",
                  fontSize: ht * 0.017,
                  color: "#484848",
                  paddingTop: ht * 0.008,
                }}
              >
                Use this option to see high demand areas
              </Text>
            </View>
            <View
              style={{
                paddingTop: ht * 0.01,
                paddingRight: wd * 0.015,
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#B4E1CA" }}
                thumbColor={isEnabled1 ? "#22A363" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
          </View>
          {isEnabled1 == true ? (
            <View
              style={{
                width: wd * 0.1,
                height: ht * 0.05,
                backgroundColor: "#E89B53",
                position: "absolute",
                top: ht * 0.005,
                right: wd * 0.05,
                borderRadius: ht * 0.03,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="bar-graph" size={20} color="white" />
            </View>
          ) : null}
        </View>
      ) : (
        <View
          style={{
            alignItems: "center",
            paddingTop: ht * 0.07,
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#BEBEBE",
              alignItems: "center",
              marginTop: ht * 0.02,
              width: wd * 0.4,
              height: ht * 0.2,
              justifyContent: "center",
              borderRadius: ht * 0.3,
            }}
          >
            <Image
              style={{ width: wd * 0.3, height: ht * 0.15 }}
              source={require("../assets/phone.png")}
            />
            <View
              style={{
                width: wd * 0.141,
                height: ht * 0.018,
                backgroundColor: "#FFC928",
                position: "absolute",
                top: ht * 0.043,
              }}
            ></View>
            <View
              style={{
                width: wd * 0.141,
                height: ht * 0.1,
                backgroundColor: "white",
                position: "absolute",
                top: ht * 0.06,
              }}
            ></View>
            <View
              style={{
                width: wd * 0.04,
                height: ht * 0.019,
                backgroundColor: "#08A87A",
                position: "absolute",
                top: ht * 0.06,
                left: -wd * 0.007,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: ht * 0.3,
              }}
            >
              <FontAwesome name="rupee" size={10} color="white" />
            </View>
            <View
              style={{
                width: wd * 0.04,
                height: ht * 0.019,
                backgroundColor: "#19B5F2",
                position: "absolute",
                top: ht * 0.028,
                right: wd * 0.03,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: ht * 0.3,
              }}
            >
              <FontAwesome name="rupee" size={10} color="white" />
            </View>
            <View
              style={{
                width: wd * 0.04,
                height: ht * 0.019,
                backgroundColor: "#C51964",
                position: "absolute",
                bottom: ht * 0.028,
                right: wd * 0.03,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: ht * 0.3,
              }}
            >
              <FontAwesome name="rupee" size={10} color="white" />
            </View>
          </View>
          <View
            style={{
              width: wd * 0.75,
              marginTop: ht * 0.03,
            }}
          >
            <Text
              style={{
                fontSize: ht * 0.0218,
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              You're currently OFF DUTY,please go ON DUTY to start earning
            </Text>
          </View>
        </View>
      )}
      {/* Toggle Section Ends */}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  header: {
    height: ht * 0.07,
    flexDirection: "row",
    elevation: 5,
    width: wd * 1,
    backgroundColor: "white",
  },
  map: {
    width: wd * 1,
    height: ht * 0.8,
    borderRadius: ht * 0.04,
  },
});
