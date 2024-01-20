import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { ScrollWrapperType } from "./types";
import Typography from "@/components/atoms/Typography/Typography";
import { Link } from "@react-navigation/native";

const ScrollWrapper = ({
  title,
  showMore,
  moreLink,
  children,
  linkParams,
}: PropsWithChildren<ScrollWrapperType>) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Typography variant="heading" size={20}>
          {title}
        </Typography>
        {showMore ? (
          <Link to={{ screen: moreLink as never, params: linkParams as never }}>
            <Typography variant="link">More</Typography>
          </Link>
        ) : null}
      </View>
      {children}
    </SafeAreaView>
  );
};

export default ScrollWrapper;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
  },
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
