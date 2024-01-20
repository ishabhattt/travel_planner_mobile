import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@/theme";
import StackNavigator from "./StackNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationStackParamList } from "@/types/navigation";
import TabNavigator from "./BottomNavigator";
const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
