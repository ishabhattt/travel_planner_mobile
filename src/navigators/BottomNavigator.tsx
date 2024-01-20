import { Example } from "@/screens";
import HomePage from "@/screens/Home";
import { ApplicationTabParamList } from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator<ApplicationTabParamList>();

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={{ flexDirection: "row", padding: 15 }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Define your icons based on the route name
        const getIconName = (routeName: string) => {
          switch (routeName) {
            case "Home":
              return "home"; // Example icon name
            case "Saved":
              return "heart"; // Example icon name
            case "Booked":
              return "briefcase"; // Example icon name
            case "Profile":
              return "user"; // Example icon name
            default:
              return "info"; // Default icon name
          }
        };

        const iconName = getIconName(route.name);

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Icon
              name={iconName}
              size={isFocused ? 28 : 20}
              color={isFocused ? "#673ab7" : "#222"}
            />
            {/* <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Saved" component={Example} />
      <Tab.Screen name="Booked" component={Example} />
      <Tab.Screen name="Profile" component={Example} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
