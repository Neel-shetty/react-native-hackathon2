import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useChatContext } from "../../context/chatContext";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";

const ChatWindow = () => {
  const { currentChannel } = useChatContext();
  return (
    <Channel channel={currentChannel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({});
