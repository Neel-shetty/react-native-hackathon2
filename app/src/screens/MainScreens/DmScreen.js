import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatWindow from "../../components/DmScreenComponents/ChatWindow";
import Header from "../../components/DmScreenComponents/Header";
import { Client } from "@saplingai/sapling-js";
import { SAPLING_API_KEY } from "@env";
import { Channel } from "stream-chat-expo";

const DmScreen = () => {
  const apikey = SAPLING_API_KEY;
  const client = new Client(apikey);

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
    // minHeight: 135,
    // backgroundColor:'pink'
  },
  chatContainer: {
    flex: 3,
  },
});
