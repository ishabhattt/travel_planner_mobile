import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Typography from "@/components/atoms/Typography/Typography";
import InputComp from "@/components/atoms/InputComp/InputComp";
import CustomButton from "@/components/atoms/Button/Button";
import Button from "@/components/atoms/Button/Button";
import IconButton from "@/components/atoms/IconButton/IconButton";
import { TopServicesConfig } from "@/utils/constants";

const TopServices = () => {
  return (
    <View style={styles.mainContent}>
      <Typography variant="heading" size={30}>
        {"What arer you looking \nfor today ?"}
      </Typography>
      {/* <InputComp variant="outlined" />
      <Button
        variant="primary"
        onPress={() => console.log("primary button pressed")}
      >
        Search
      </Button> */}
      <View style={styles.serviceContainer}>
        {TopServicesConfig?.map((service) => (
          <IconButton key={service.id} {...service} />
        ))}
      </View>
    </View>
  );
};

export default TopServices;

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
  },
  mainContent: {
    paddingHorizontal: 20,
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  serviceButton: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
