import { useTheme } from "@/theme";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface RadioButtonGroupProps {
  buttons: { key: string; text: string }[];
  containerStyle?: ViewStyle;
  value: string;
  setValue(value: string): void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  buttons,
  containerStyle,
  value,
  setValue,
}) => {
  const styles = createStyles();
  return (
    <View style={[containerStyle]}>
      {buttons.map((res) => (
        <View key={res.key} style={styles.container}>
          <Text style={styles.radioText}>{res.text}</Text>
          <TouchableOpacity
            style={styles.radioCircle}
            onPress={() => {
              setValue(res.key);
            }}
          >
            {value === res.key && <View style={styles.selectedRb} />}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
const createStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      marginBottom: 18,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    radioText: {
      marginRight: 10,
      fontSize: 16,
      color: "#000",
      fontFamily: "Quicksand-Regular",
    },
    radioCircle: {
      height: 20,
      width: 20,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: theme.backgrounds.primary.backgroundColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    selectedRb: {
      width: 10,
      height: 10,
      borderRadius: 50,
      backgroundColor: theme.backgrounds.primary.backgroundColor,
    },
    result: {
      marginTop: 20,
      color: "white",
      fontWeight: "600",
      backgroundColor: theme.backgrounds.primary.backgroundColor,
    },
  });
};

export default RadioButtonGroup;
