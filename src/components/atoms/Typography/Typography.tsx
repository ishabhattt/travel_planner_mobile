import { StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";

interface TypographyProps {
  variant?: "heading" | "subheading" | "body" | "caption" | "link";
  size?: number;
  color?: string;
  style?: TextStyle;
}

const Typography = ({
  children,
  variant,
  size,
  color,
  style,
}: PropsWithChildren<TypographyProps>) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case "heading":
        return styles.heading;
      case "subheading":
        return styles.subheading;
      case "body":
        return styles.body;
      case "caption":
        return styles.caption;
      case "link":
        return styles.link;
      default:
        return {};
    }
  };

  const mergedStyle: TextStyle = {
    ...getVariantStyle(),
    fontSize: size,
    color,
    ...style,
  };

  return <Text style={mergedStyle}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: "#888", // Default color for caption
  },
  link: {
    fontSize: 14,
    color: "#888", // Default color for caption
    textDecorationLine: "underline",
  },
});
