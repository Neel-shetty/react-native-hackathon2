import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import Layout from "../constants/Layout";
import { Contacts } from "../../../assets/dummyData/Contacts";

const ChatList = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={Contacts}
        renderItem={({ item }) => (
          <View>
            <ChatItem data={item} />
          </View>
        )}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  root: {
    height: 500,
    width: Layout.PaddingH,
  },
});
