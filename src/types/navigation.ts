import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

// Define the Stack navigator params
export type ApplicationStackParamList = {
  Startup: undefined;
  Example: undefined;
  Main: undefined;
  "Popular Destinations": undefined;
  "Place of Interest": undefined;
  "Flight Search": undefined;
};

// Define the Stack navigator props
export type ApplicationStackProps<T extends keyof ApplicationStackParamList> =
  StackScreenProps<ApplicationStackParamList, T>;

// Define the Tab navigator params
export type ApplicationTabParamList = {
  Home: undefined;
  Saved: undefined;
  Booked: undefined;
  Profile: undefined;
};

// Define the Tab navigator props
export type ApplicationTabProps<T extends keyof ApplicationTabParamList> =
  BottomTabScreenProps<ApplicationTabParamList, T>;
