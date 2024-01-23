import React from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";

//To create the horizontal line by passing height and color

export type DividerType = {
  lineHight?: number;
  lineColor?: string;
};

export const Divider = (props: DividerType) => {
  const { colors } = useTheme();
  const { lineHight = 1.5, lineColor = colors?.gray100 } = props;

  return (
    <View
      style={{
        height: lineHight,
        backgroundColor: lineColor,
        marginVertical: 5,
      }}
    />
  );
};
