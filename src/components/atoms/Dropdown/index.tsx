import React, { FC, ReactElement, useRef, useState, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

const Dropdown: FC<DropdownProps> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef<TouchableOpacity>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | undefined>(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const calculateDropdownWidth = useCallback(() => {
    if (DropdownButton.current) {
      DropdownButton.current.measure((_fx, _fy, _w, _h, px, _py) => {
        setDropdownWidth(px);
      });
    }
  }, []);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    calculateDropdownWidth();
    if (DropdownButton.current) {
      DropdownButton.current.measure((_fx, _fy, _w, h, px, py) => {
        setDropdownTop(py);
      });
      setVisible(true);
    }
  };

  const onItemPress = (item: DropdownItem): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: { item: DropdownItem }): ReactElement => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={[styles.overlay, { width: dropdownWidth }]}
          onPress={() => setVisible(false)}
        >
          <View
            style={[
              styles.dropdown,
              { top: dropdownTop, width: dropdownWidth },
            ]}
          >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
      <Icon style={styles.icon} name="chevron-down" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 16,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default Dropdown;
