import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/HomeScreenComponents/Header";
import Search from "../components/HomeScreenComponents/Search";
import ChatList from "../components/HomeScreenComponents/ChatList";
import { GlobalStyles } from "../components/constants/GlobalStyles";
import { height, width } from "../components/constants/Layout";

const HomeScreen = () => {
  //well, wasted a day :)
  return (
    <View style={styles.root}>
      <View style={styles.bg}></View>
      <View style={styles.bgo1}></View>
      <View style={styles.bgo2}></View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Header />
      </View>
      <View
        style={{
          flex: 2,
          // backgroundColor: "pink",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={styles.heading}>Messages</Text>
        </View>
        <Search />
      </View>
      <View style={{ flex: 8 }}>
        <ChatList />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  bg: {
    width: width * 2,
    // height: height - width * 0.1,
    height: width * 2,
    position: "absolute",
    backgroundColor: GlobalStyles.colors.blue,
    borderRadius: 152,
    transform: [{ rotate: "45deg" }, { translateX: 220 }, { translateY: 220 }],
    bottom: 50,
  },
  bgo1: {
    width: width * 2 * 1.05,
    // height: height - width * 0.1,
    height: width * 2 * 1.05,
    position: "absolute",
    // backgroundColor: GlobalStyles.colors.blue,
    borderRadius: 152,
    transform: [{ rotate: "45deg" }, { translateX: 220 }, { translateY: 220 }],
    bottom: 50,
    borderWidth: 1,
    borderColor: "#EEF2E2",
  },
  bgo2: {
    width: width * 2 * 1.1,
    // height: height - width * 0.1,
    height: width * 2 * 1.1,
    position: "absolute",
    // backgroundColor: GlobalStyles.colors.blue,
    borderRadius: 152,
    transform: [{ rotate: "45deg" }, { translateX: 220 }, { translateY: 220 }],
    bottom: 50,
    borderWidth: 1,
    borderColor: "#EEF2E2",
  },
  heading: {
    fontFamily: "poppins-bold",
    fontSize: 25,
    paddingBottom: 15,
    textAlign: "left",
  },
});
