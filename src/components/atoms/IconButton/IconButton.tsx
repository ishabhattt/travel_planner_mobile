import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../Typography/Typography";
import { default as MaterialIcons } from "react-native-vector-icons/MaterialIcons";
import { default as MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButtonProps } from "./types";
import { useNavigation } from "@react-navigation/native";
const IconButton = ({
  backgroundColor,
  color,
  description,
  iconName,
  iconType,
  id,
  title,
  screen,
}: IconButtonProps) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      key={id}
      style={[
        styles.serviceButton,
        { backgroundColor: `${backgroundColor}20` },
      ]}
      onPress={() => {
        navigate(screen as never);
      }}
    >
      {iconType === "Material" ? (
        <MaterialIcons name={iconName} size={30} color={color} />
      ) : (
        <MaterialCommunityIcons name={iconName} size={30} color={color} />
      )}
      <View style={{ marginTop: 3 }}>
        <Typography variant="caption" color={color}>
          {title}{" "}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  textHeading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
  },
  mainContent: {
    padding: 20,
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
  serviceButton: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
