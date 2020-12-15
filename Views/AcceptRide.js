import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function AcceptRide({ navigation }) {
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
      {/* Map starts */}
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
      </View>
      {/* Map Ends */}
      {/* transparent view starts */}
      <View
        style={{
          width: wd * 1,
          height: ht * 0.77,
          position: "absolute",
          backgroundColor: "grey",
          opacity: 0.8,
        }}
      >
        <View
          style={{
            width: wd * 1,
            height: ht * 0.2,
            position: "absolute",
            backgroundColor: "#182434",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Fontisto name="motorcycle" size={34} color="#FFC928" />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: ht * 0.025,
              paddingLeft: wd * 0.03,
            }}
          >
            Bike Taxi
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: wd * 0.24,
          height: ht * 0.048,
          position: "absolute",
          backgroundColor: "#FFFFFF",
          top: ht * 0.02,
          right: wd * 0.03,
          borderColor: "#DE8283",
          borderWidth: wd * 0.004,
          borderRadius: ht * 0.006,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
        }}
      >
        <Text style={{ color: "#DE8283", fontWeight: "bold" }}>Skip Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: ht * 0.2,
          right: wd * 0.03,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          borderRadius: ht * 0.1,
        }}
      >
        <Image
          style={{
            width: wd * 0.17,
            height: ht * 0.085,
            borderWidth: wd * 0.006,
            borderRadius: ht * 0.1,
            borderColor: "white",
          }}
          source={require("../assets/Rapido-logo.png")}
        />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: ht * 0.5,
          backgroundColor: "white",
          left: wd * 0.38,
          borderRadius: ht * 0.2,
        }}
      >
        <CountdownCircleTimer
          isPlaying={true}
          duration={25}
          colors={"#25A665"}
          size={100}
          strokeWidth={7}
          rotation={"counterclockwise"}
        >
          {({ remainingTime }) => (
            <Animated.Text style={{ color: "black", fontSize: ht * 0.05 }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
      {/* transparent view ends */}

      {/* Pickup section starts */}
      <View style={{ paddingTop: ht * 0.01 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <MaterialCommunityIcons
              name="circle-slice-8"
              size={16}
              color="#24A765"
            />
          </View>
          <View style={{ flex: 6 }}>
            <View style={{ marginBottom: ht * 0.008 }}>
              <Text
                style={{
                  color: "#696969",
                  fontWeight: "600",
                  fontSize: ht * 0.018,
                }}
              >
                Pickup
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "black",
                  fontSize: ht * 0.018,
                  fontWeight: "bold",
                }}
              >
                1-90/7/B/111, Patrika Nagar, HITEC City,Hyderabad, Telangana
                500081, India
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
              backgroundColor: "#FFC928",
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
            <Text
              style={{
                color: "black",
                fontWeight: "600",
                fontSize: ht * 0.024,
              }}
            >
              ACCEPT RIDE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Pick up section ends */}
    </View>
  );
}

export default AcceptRide;
const styles = StyleSheet.create({
  map: {
    width: wd * 1,
    height: ht * 0.77,
  },
});
