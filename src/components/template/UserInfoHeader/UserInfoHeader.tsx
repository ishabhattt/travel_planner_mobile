import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
  Image,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import { Location } from "./types";
import Typography from "@/components/atoms/Typography/Typography";
import ProfilePicture from "@/assets/images/profile_pic.png";
import { ImageVariant } from "@/components/atoms";
import layout from "@/theme/layout";
import useLocation from "@/hooks/useLocation";
import Icon from "react-native-vector-icons/Feather";
// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("granted", granted);
    if (granted === "granted") {
      console.log("You can use Geolocation");
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
};
const UserInfoHeader = () => {
  const { city } = useLocation();

  return (
    <View style={styles.container}>
      <ImageVariant
        source={ProfilePicture}
        testID="brand-img"
        style={styles.profilePicture}
        resizeMode={"cover"}
      />
      <View style={styles.headerText}>
        <Typography variant="heading" size={20}>
          Welcome back
        </Typography>
        <View style={styles.locationContainer}>
          <Icon name="map-pin" />

          <Typography variant="caption" size={16}>
            {" "}
            {city ?? "-"}
          </Typography>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  locationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  headerText: {
    paddingLeft: 10,
  },
});
export default UserInfoHeader;
