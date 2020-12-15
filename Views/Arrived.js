import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker, Circle } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Arrived({ navigation }) {
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
          <FontAwesome5 name="bars" size={20} color="#000000" />
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: ht * 0.024 }}>Go to Pick Up Location</Text>
        </View>

        <TouchableOpacity
          onPress={() => alert("In Progress...")}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              width: wd * 0.1,
              borderRadius: ht * 0.03,
              height: ht * 0.05,
            }}
          >
            <View
              style={{ position: "relative", top: ht * 0.01, left: wd * 0.02 }}
            >
              <Zocial name="call" size={20} color="#FFC928" />
            </View>
            <View
              style={{
                position: "relative",
                bottom: ht * 0.028,
                left: wd * 0.04,
              }}
            >
              <MaterialCommunityIcons
                name="call-received"
                size={16}
                color="#FFC928"
              />
            </View>
          </View>
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "600", fontSize: ht * 0.022 }}
        >
          Order Id:RD16075865891182258
        </Text>
      </View>
      {/* Earning Header Ends */}
      {/* Map Starts */}
      <View
        style={{ borderBottomColor: "#FECA29", borderBottomWidth: wd * 0.005 }}
      >
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
      </View>
      {/* Map Ends */}

      {/* Address Section Start */}
      <View style={{ paddingTop: ht * 0.04 }}>
        {/* Go to Pickup location Starts */}
        <TouchableOpacity
          style={{
            position: "absolute",
            width: wd * 0.6,
            height: ht * 0.05,
            backgroundColor: "#FFC928",
            borderRadius: ht * 0.02,
            justifyContent: "center",
            alignItems: "center",
            left: wd * 0.22,
            top: -ht * 0.027,
            borderColor: "white",
            borderWidth: wd * 0.005,
            elevation: 5,
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: ht * 0.023 }}>
            <MaterialCommunityIcons
              name="arrow-up-bold"
              size={19}
              color="black"
            />{" "}
            Go to pickup location
          </Text>
        </TouchableOpacity>
        {/* Go to pickup location Ends */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Entypo name="location-pin" size={45} color="#27A264" />
          </View>
          <View style={{ flex: 4 }}>
            <View style={{ marginBottom: ht * 0.008 }}>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.023 }}>
                Satish Kumar
              </Text>
            </View>
            <View>
              <Text style={{ color: "#696969", fontSize: ht * 0.018 }}>
                Lakshmi Nivasam # 2-95/4/1,Masthan Nagar, CBI Colony, Jubliee
                Hills,Hyderabad, Telangana500033, India
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: ht * 0.07,
            marginTop: ht * 0.02,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#2B72EE",
              width: wd * 0.8,
              justifyContent: "center",
              alignItems: "center",
              height: ht * 0.065,
              borderTopRightRadius: ht * 0.005,
              borderBottomRightRadius: ht * 0.005,
              flexDirection: "row",
              elevation: 5,
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 0,
                backgroundColor: "#4E8BF6",
              }}
            >
              <AntDesign name="arrowright" size={34} color="white" />
            </View>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: ht * 0.024,
              }}
            >
              ARRIVED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Address Section Ends */}
    </View>
  );
}

export default Arrived;

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
    height: ht * 0.58,
    borderRadius: ht * 0.04,
  },
});
