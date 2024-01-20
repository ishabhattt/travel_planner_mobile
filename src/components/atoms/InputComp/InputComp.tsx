import { StyleSheet, TextInput, View, TextStyle } from "react-native";
import React, { PropsWithChildren } from "react";

interface TextInputProps {
  variant: "default" | "outlined";
  size?: number;
  color?: string;
}

const InputComp = ({
  children,
  variant,
  size,
  color,
  ...textInputProps
}: PropsWithChildren<
  TextInputProps & React.ComponentProps<typeof TextInput>
>) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case "default":
        return styles.default;
      case "outlined":
        return styles.outlined;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, getVariantStyle(), { fontSize: size, color }]}
        {...textInputProps}
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
  default: {},
  outlined: {
    borderRadius: 8,
  },
});
