import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/HomeScreenComponents/Header";
import Search from "../components/HomeScreenComponents/Search";
import ChatList from "../components/HomeScreenComponents/ChatList";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View>
        <Header />
      </View>
      <View>
        <Search />
      </View>
      <View>
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
});
