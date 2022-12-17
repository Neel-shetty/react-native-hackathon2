import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatWindow from "../../components/DmScreenComponents/ChatWindow";
import Header from "../../components/DmScreenComponents/Header";

const DmScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.chatContainer}>
        <ChatWindow />
      </View>
    </View>
  );
};

export default DmScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
  },
});
