import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Dropdown from "@/components/atoms/Dropdown";
import Typography from "@/components/atoms/Typography/Typography";

const FlightClassPicker = () => {
  return (
    <View>
      <Typography variant="heading" size={12}>
        FlightClassPicker
      </Typography>
      <Dropdown
        data={[{ label: "economy", value: "economy" }]}
        label="Class"
        onSelect={(item) => console.log(item)}
      />
    </View>
  );
};

export default FlightClassPicker;

const styles = StyleSheet.create({});
