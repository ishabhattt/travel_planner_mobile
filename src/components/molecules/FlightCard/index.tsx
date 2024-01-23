import { Card } from "@/components/atoms/Card";
import { Divider } from "@/components/atoms/DividerTemp";
import { useTheme } from "@/theme";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { default as MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";

interface FlightObjType {
  fare: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureCode: string;
  arrivalCode: string;
}
const FlightCard = ({ data }: FlightObjType) => {
  const { colors, backgrounds, layout, components, fonts, gutters } =
    useTheme();

  return (
    <Card style={styles.card}>
      <View style={[layout.row, layout.justifyBetween, layout.itemsCenter]}>
        <View style={[layout.row, layout.itemsCenter]}>
          <View
            style={[
              backgrounds.gray400,
              components.buttonCircle,
              styles.flightIcon,
            ]}
          >
            <MaterialCommunityIcons
              name={"airplane"}
              size={25}
              color={colors?.primary}
            />
          </View>
          <Text
            style={[
              fonts.size_18,
              fonts.gray800,
              fonts.bold,
              gutters.marginLeft_12,
            ]}
          >
            Jet Airlines
          </Text>
        </View>
        <View>
          <Text style={[fonts.size_20, fonts.gray800, fonts.bold]}>
            $ {data?.fare}
          </Text>
        </View>
      </View>
      <View style={[gutters.paddingVertical_12]}>
        <Divider />
      </View>

      <View
        style={[
          layout.row,
          layout.justifyBetween,
          layout.itemsCenter,
          gutters.marginBottom_12,
        ]}
      >
        <Text style={[fonts.size_14, fonts.gray800, fonts.bold]}>
          Departure
        </Text>
        <Text style={[fonts.size_14, fonts.gray800, fonts.bold]}>Arrival</Text>
      </View>
      <View style={[layout.row, layout.justifyBetween, layout.itemsCenter]}>
        <View>
          <Text style={[fonts.size_14, fonts.gray800, fonts.bold]}>
            {data?.departureTime}
          </Text>
          <Text style={[fonts.size_14, fonts.gray400, fonts.capitalize]}>
            {data?.departureCode}
          </Text>
        </View>
        <View style={[layout.col, layout.itemsCenter]}>
          <Text style={[fonts.size_14, fonts.gray800, fonts.bold]}>
            {data?.duration}
          </Text>
          <View style={[layout.row, layout.justifyBetween, layout.itemsCenter]}>
            <MaterialCommunityIcons
              name={"airplane"}
              size={20}
              color={colors?.primary}
            />
            <View
              style={{
                borderBottomColor: colors?.primary,
                ...styles.dashedLine,
              }}
            />
            <MaterialCommunityIcons
              name={"airplane-landing"}
              size={20}
              color={colors?.primary}
            />
          </View>
        </View>

        <View>
          <Text style={[fonts.size_14, fonts.gray800, fonts.bold]}>
            {data?.arrivalTime}
          </Text>
          <Text style={[fonts.size_14, fonts.gray400, fonts.capitalize]}>
            {data?.arrivalCode}
          </Text>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: { shadowColor: "#000", elevation: 4 },
  flightIcon: {
    height: 40,
    width: 40,
  },
  dashedLine: {
    width: 70,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    marginHorizontal: 3,
  },
});
export default FlightCard;
