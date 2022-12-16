import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Layout, { width } from "../constants/Layout";

const Search = () => {
  return (
    <View style={styles.root}>
      <View>
        <Ionicons name="search" size={24} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={"Search for contacts"} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: Layout.PaddingH,
    backgroundColor: "white",
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "gray",
    elevation: 6,
  },
  inputContainer: {
    width: width * 0.75,
  },
  input: {
    fontFamily: "poppins-regular",
    fontSize: 12.8,
  },
});
