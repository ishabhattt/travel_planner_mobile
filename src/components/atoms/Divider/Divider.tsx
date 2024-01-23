import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { useTheme } from "@/theme";

interface DividerProps {
  horizontal?: boolean;
  vertical?: boolean;
  fullWidth?: boolean;
  color?: string;
  borderStyle?:"solid" | "dotted" | "dashed" | undefined
}

const Divider: React.FC<DividerProps> = ({
  horizontal,
  vertical,
  fullWidth,
  color,borderStyle
}) => {
  const styles = createStyles();
  const theme = useTheme();

  const dividerStyle: ViewStyle = {
    width: vertical ? 1 : fullWidth ? "100%" : 1,
    height: horizontal ? 1 : "50%",
    backgroundColor: color || theme.colors.gray800,
    borderStyle: borderStyle,
  };

  return <View style={[dividerStyle]} />;
};

export default Divider;

const createStyles = () => {
  // Styles definition here if needed
};

// Optional: Define a type for your styles if you want to use TypeScript with StyleSheet.create
// type DividerStyles = ReturnType<typeof createStyles>;
