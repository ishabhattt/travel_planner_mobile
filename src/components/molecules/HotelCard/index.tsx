import { Card } from "@/components/atoms/Card";
import { Divider } from "@/components/atoms/DividerTemp";
import { useTheme } from "@/theme";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { default as MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";

const HotelCard = () => {
  const { colors, backgrounds, layout, components, fonts, gutters } =
    useTheme();

  return (
    <View style={styles.view}>
      <Card style={styles.card}>
        <View style={[layout.row]}>
          <View>
            <Image
              source={{
                uri: "https://legacy.reactjs.org/logo-og.png",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={[gutters.marginLeft_12]}>
            <Text
              style={[fonts.size_18, fonts.gray800, fonts.bold, { width: 250 }]}
            >
              Millennium Airport Hotel & Resort
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 13,
  },
  card: { shadowColor: "#000", elevation: 4, padding: 12 },
  image: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
});
export default HotelCard;
