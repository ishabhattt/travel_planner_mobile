import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollWrapper from "@/components/molecules/ScrollWrapper/ScrollWrapper";

const PopularDestination = () => {
  return (
    <ScrollWrapper
      title="Popular Destinations"
      showMore={true}
      moreLink="Popular Destinations"
    ></ScrollWrapper>
  );
};

export default PopularDestination;

const styles = StyleSheet.create({});
