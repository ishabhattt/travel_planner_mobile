import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollWrapper from "@/components/molecules/ScrollWrapper/ScrollWrapper";

const PlaceOfInterest = () => {
  return (
    <ScrollWrapper
      title="Place of Interest"
      showMore={true}
      moreLink="Place of Interest"
    ></ScrollWrapper>
  );
};

export default PlaceOfInterest;

const styles = StyleSheet.create({});
