import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/theme";
import RadioButton from "@/components/atoms/RadioButton/RadioButton";
import Button from "@/components/atoms/Button/Button";
import InputComp from "@/components/atoms/InputComp/InputComp";
import { ImageVariant } from "@/components/atoms";
import FlightLanding from "@/assets/icons/flight-landing.png";
import FlightDeparture from "@/assets/icons/flight-departure.png";
import FlightALternate from "@/assets/icons/flight-alternate.png";
import Divider from "@/components/atoms/Divider/Divider";
import DatePicker from "react-native-modern-datepicker";
import Datepicker from "@/components/atoms/DatePicker/Datepicker";
import dayjs from "dayjs";
import PassangerDetailPicker from "@/components/molecules/PassangerDetailPicker";
import FlightClassPicker from "@/components/molecules/FlightClassPicker";

const FlightSearchCard = () => {
  const styles = createStyles();
  const [tripType, setTripType] = useState<string>("1");
  const [filghtRoute, setFilghtRoute] = useState({ from: "", to: "" });
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passangerDetails, setPassangerDetails] = useState({
    adults: 0,
    kids: 0,
    infants: 0,
  });

  return (
    <View style={[styles.container]}>
      <View style={styles.backgroundColorAbs} />
      <View style={styles.card}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            buttons={[
              { key: "1", text: "One way" },
              { key: "2", text: "Round Trip" },
            ]}
            containerStyle={styles.radiogroup}
            value={tripType}
            setValue={setTripType}
          />
        </View>
        <View style={styles.flightSearchContainer}>
          <View style={styles.flightIcons}>
            <ImageVariant
              source={FlightDeparture}
              style={{ width: 24, height: 24 }}
            />
            <Divider />
            <ImageVariant
              source={FlightLanding}
              style={{ width: 24, height: 24 }}
            />
          </View>
          <View style={styles.flightSearch}>
            <InputComp
              variant="default"
              placeholder="From"
              text={filghtRoute?.from}
              setText={(val) =>
                setFilghtRoute((prev) => {
                  return { ...prev, from: val };
                })
              }
            />
            <Divider horizontal fullWidth />
            <InputComp
              variant="default"
              placeholder="To"
              text={filghtRoute?.to}
              setText={(val) =>
                setFilghtRoute((prev) => {
                  return { ...prev, to: val };
                })
              }
            />
          </View>
          <View style={styles.flightDestinationToggle}>
            <ImageVariant
              source={FlightALternate}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <View
          style={[
            styles.datePickerCard,
            tripType === "2" ? { flex: 0.5, marginRight: 8 } : {},
          ]}
        >
          <Datepicker
            initialDate={departureDate}
            label="Departure"
            selectedDate={departureDate}
            setSelectedDate={setDepartureDate}
          />
        </View>
        {tripType === "2" && (
          <View
            style={[
              styles.datePickerCard,
              tripType === "2" ? { flex: 0.5 } : {},
            ]}
          >
            <Datepicker
              initialDate={returnDate}
              label="Return"
              selectedDate={returnDate}
              setSelectedDate={setReturnDate}
            />
          </View>
        )}
      </View>
      <View style={styles.passangerDetailsContainer}>
        <View
          style={[styles.passangerDetailsCard, { flex: 0.6, marginRight: 10 }]}
        >
          <PassangerDetailPicker
            passangerDetails={passangerDetails}
            setPassangerDetails={setPassangerDetails}
          />
        </View>
        <View style={[styles.passangerDetailsCard, { flex: 0.4 }]}>
          <FlightClassPicker />
        </View>
      </View>

      <Button
        variant="primary"
        onPress={() => console.log("Search Pressed")}
        fullWidth
      >
        Search Flights
      </Button>
    </View>
  );
};

export default FlightSearchCard;

const createStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 20,
      position: "relative",
    },
    backgroundColorAbs: {
      backgroundColor: theme.backgrounds.secondary?.backgroundColor,
      // opacity: 0.7,
      height: 1000,
      width: 1000,
      position: "absolute",
      top: -600,
      left: -280,
      right: 0,
      bottom: 0,
      borderRadius: 500,
    },
    card: {
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      height: 170,
      width: "100%",
      backgroundColor: theme.backgrounds.white
        .backgroundColor as unknown as string,
      position: "relative",
      borderRadius: 10,
      padding: 20,
    },
    datePickerCard: {
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      height: 50,
      width: "100%",
      backgroundColor: theme.backgrounds.white
        .backgroundColor as unknown as string,
      position: "relative",
      borderRadius: 10,
      padding: 15,
    },
    passangerDetailsCard: {
      alignContent: "flex-start",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: theme.backgrounds.white
        .backgroundColor as unknown as string,
      position: "relative",
      borderRadius: 10,
      padding: 10,
    },
    radiogroup: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
    },
    radioButtonContainer: {
      width: "100%",
    },
    flightSearch: {
      width: "100%",
      flex: 0.8,
      justifyContent: "center",
    },
    flightSearchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      height: 90,
    },
    flightDestinationToggle: {
      flex: 0.1,
      transform: "rotate(90deg)",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    flightIcons: {
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "space-around",
      alignItems: "center",
      height: 90,
    },
    divider: {
      width: 1,
      height: "50%",
      backgroundColor: theme.colors.gray800,
      borderStyle: "dashed",
    },
    dividerHorizontal: {
      width: "100%",
      height: "50%",
      backgroundColor: theme.colors.gray800,
      borderStyle: "dashed",
    },
    dateContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: 10,
    },
    passangerDetailsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: 10,
    },
  });
};
