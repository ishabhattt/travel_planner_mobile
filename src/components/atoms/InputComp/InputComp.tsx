import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  Animated,
  Easing,
} from "react-native";
import React, { PropsWithChildren, useEffect, useState } from "react";

interface TextInputProps {
  variant: "default" | "outlined";
  size?: number;
  color?: string;
  placeholder?: string;
  text: string;
  setText(value: string): void;
}

const InputComp = ({
  children,
  variant,
  size,
  color,
  placeholder,
  setText,
  text,
  ...textInputProps
}: PropsWithChildren<
  TextInputProps & React.ComponentProps<typeof TextInput>
>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [animation] = useState(new Animated.Value(0));

  const handleFocus = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!text) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 150,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (text) {
      handleFocus();
    }
  }, [text]);

  const labelStyle = {
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [text || isFocused ? 0 : 18, 0],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [text || isFocused ? 12 : 16, 12],
    }),
    color: isFocused || text ? "#3498db" : "#888",
  };

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
      {isFocused || text ? (
        <Animated.Text style={[styles.label, labelStyle]}>
          {placeholder}
        </Animated.Text>
      ) : null}
      <TextInput
        style={[styles.input, getVariantStyle(), { fontSize: size, color }]}
        placeholder={isFocused ? "" : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={setText}
        value={text}
        {...textInputProps}
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    height: 40,
    borderColor: "gray",
    paddingLeft: 5,
    marginTop: 10,
    fontFamily: "Quicksand-Regular",
  },
  default: {},
  outlined: {
    borderRadius: 8,
    paddingTop: 12,
  },
  label: {
    position: "absolute",
    left: 0,
    top: 0,
    fontFamily: "Quicksand-Regular",
  },
});
