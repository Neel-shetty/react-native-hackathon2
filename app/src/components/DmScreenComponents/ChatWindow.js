import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useChatContext } from "../../context/chatContext";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const ChatWindow = () => {
  const { currentChannel } = useChatContext();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: currentChannel.data.name ? currentChannel.data.name : "chat",
    });
  }, [currentChannel.data.name]);

  return (
    <View style={styles.root}>
      <Channel channel={currentChannel}>
        <MessageList />
        <MessageInput />
      </Channel>
    </View>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
