import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatWindow from "../../components/DmScreenComponents/ChatWindow";

const DmScreen = () => {
  return (
    <View style={styles.root}>
      <ChatWindow />
    </View>
  );
};

export default DmScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
