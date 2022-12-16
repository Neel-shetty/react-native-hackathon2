import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Layout, { width } from "../constants/Layout";
import { GlobalStyles } from "../constants/GlobalStyles";

const Header = () => {
  return (
    <View style={styles.root}>
      <Ionicons name="menu" size={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-end",
    width: Layout.PaddingH,
  },
});
