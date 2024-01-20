import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeScreen, TopServices } from "@/components/template";
import PopularDestination from "@/components/template/PopularDestination/PopularDestination";
import UserInfoHeader from "@/components/template/UserInfoHeader/UserInfoHeader";
import PlaceOfInterest from "@/components/template/PlaceofInterest/PlaceOfInterest";

const HomePage = () => {
  return (
    <SafeScreen>
      <UserInfoHeader />
      <TopServices />
      <PopularDestination />
      <PlaceOfInterest />
    </SafeScreen>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
