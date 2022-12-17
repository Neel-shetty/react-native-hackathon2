import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Layout, { width } from "../constants/Layout";
import { GlobalStyles } from "../constants/GlobalStyles";
import { Auth } from "aws-amplify";

const Header = () => {
  function LogOut() {
    Auth.signOut();
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={LogOut}>
        <Ionicons name="menu" size={24} />
      </TouchableOpacity>
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
