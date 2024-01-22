import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { PropsWithChildren } from "react";
import Typography from "../Typography/Typography";

interface ButtonProps {
  variant: "primary" | "secondary" | "outlined";
  onPress: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant,
  onPress,
  disabled,
  fullWidth,
}: PropsWithChildren<ButtonProps>) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "outlined":
        return styles.outlined;
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        fullWidth ? { width: "100%" } : {},
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Typography style={styles.buttonText}>{children}</Typography>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  primary: {
    backgroundColor: "#ff4e09",
    text: {
      color: "#fff",
    },
  },
  secondary: {
    backgroundColor: "#05b4ff",
    text: {
      color: "#fff",
    },
  },
  outlined: {
    borderWidth: 1,
    borderColor: "#3498db",
    backgroundColor: "transparent",
    text: {
      color: "#3498db",
    },
  },
});
