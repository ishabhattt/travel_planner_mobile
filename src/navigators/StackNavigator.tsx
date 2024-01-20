import { ApplicationStackParamList } from "@/types/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./BottomNavigator";
import PopularDestinations from "@/screens/PopularDestinations/PopularDestinations";
import Header from "@/components/atoms/Header/Header";
import FlightSearch from "@/screens/FlightSearch";

const Stack = createStackNavigator<ApplicationStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="Popular Destinations"
        component={PopularDestinations}
        options={({ route, navigation }) => ({
          header: (props) => <Header {...props} />,
          headerShown: true,
        })}
      />
      <Stack.Screen
        name="Place of Interest"
        component={PopularDestinations}
        options={({ route, navigation }) => ({
          header: (props) => <Header {...props} />,
          headerShown: true,
        })}
      />
      <Stack.Screen
        name="Flight Search"
        component={FlightSearch}
        options={({ route, navigation }) => ({
          header: (props) => <Header {...props} />,
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}
export default StackNavigator;
