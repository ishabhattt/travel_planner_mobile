import Typography from "@/components/atoms/Typography/Typography";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

interface IPasssangerDetailProps {
  passangerDetails: {
    adults: number;
    kids: number;
    infants: number;
  };
  setPassangerDetails: React.Dispatch<
    React.SetStateAction<{
      adults: number;
      kids: number;
      infants: number;
    }>
  >;
}

const PassangerDetailPicker: React.FC<IPasssangerDetailProps> = (props) => {
  const { passangerDetails, setPassangerDetails } = props;

  const handleInputChange = (
    field: keyof typeof passangerDetails,
    value: string
  ) => {
    setPassangerDetails((prevDetails) => ({
      ...prevDetails,
      [field]: parseInt(value) || 0,
    }));
  };

  return (
    <View>
      <Typography variant="heading">Travellers</Typography>
      <View style={styles.row}>
        <View style={styles.row}>
          <Typography variant="body">
            Adults : {passangerDetails?.adults}{" "}
          </Typography>
        </View>
        <View style={styles.row}>
          <Typography variant="body">
            Kids :{passangerDetails?.infants}{" "}
          </Typography>
        </View>
        <View style={styles.row}>
          <Typography variant="body">
            Infants :{passangerDetails?.kids}{" "}
          </Typography>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PassangerDetailPicker;
