import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  GestureResponderEvent,
} from "react-native";
import ReactNativeModernDatepicker from "react-native-modern-datepicker";
// REFERENCE https://hosseinshabani.github.io/react-native-modern-datepicker/
import Typography from "../Typography/Typography";
import dayjs from "dayjs";

interface DatepickerProps {
  initialDate: string; // Assuming the date is represented as a string, adjust accordingly
  label?: string; // Optional label
  selectedDate: string; // Selected date prop
  setSelectedDate: (date: string) => void; // Function to set the selected date
}

const Datepicker: React.FC<DatepickerProps> = ({
  initialDate,
  label,
  selectedDate,
  setSelectedDate,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDatePress = () => {
    setModalVisible(true);
  };

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOverlayPress = (e: GestureResponderEvent) => {
    // Check if the touch event is outside the datepicker
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  return (
    <View style={styles.container}>
      {label && <Typography style={styles.label}>{label}</Typography>}
      <TouchableOpacity onPress={handleDatePress}>
        <Typography style={styles.dateText}>
          {selectedDate || "Select Date"}
        </Typography>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          style={styles.overlay} // Invisible overlay to capture taps outside the datepicker
          activeOpacity={1}
          onPress={handleOverlayPress}
        >
          <View style={styles.datepickerContainer}>
            <ReactNativeModernDatepicker
              onSelectedChange={(newDate) => handleDateChange(newDate)}
              mode={"calendar"}
              //   current={dayjs().format("YYYY-MM-DD")}
              selected={selectedDate}
              minuteInterval={30}
              style={{ borderRadius: 10 }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: "#2196F3",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  datepickerContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the transparency as needed
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Datepicker;
