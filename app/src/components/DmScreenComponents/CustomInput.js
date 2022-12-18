import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Layout, { width } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import PlayIcon from "../../../assets/icons/PlayIcon";

const CustomInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={"Write a message"} />
      </View>
      <View style={{ elevation: 6, shadowColor: "red", height: 88, width: 86 }}>
        {/* <Ionicons name="" size={24} /> */}
        <View>
          <PlayIcon />
        </View>
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  root: {
    height: 80,
    width: Layout.PaddingH,
    alignSelf: "center",
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 6,
    shadowColor: "gray",
    flexDirection: "row",
  },
  input: {
    // backgroundColor: "violet",
    width: width - width * 0.4,
    height: 50,
    fontFamily: "poppins-regular",
    fontSize: 12.8,
    color: "#656565",
    paddingLeft: 10,
  },
});
