import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { default as FeatherIcon } from "react-native-vector-icons/Feather";
import { StackHeaderProps } from "@react-navigation/stack";
interface HeaderProps extends StackHeaderProps {
  title: string;
}
const Header = (props: StackHeaderProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress}>
        <FeatherIcon name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props?.route?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Header;
