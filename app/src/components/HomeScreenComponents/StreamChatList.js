import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChannelList } from "stream-chat-expo";
import { useChatContext } from "../../context/chatContext";
import { useNavigation } from "@react-navigation/native";

const StreamChatList = () => {
  const { setCurrentChannel } = useChatContext();

  const navigation = useNavigation();

  async function channelButton(channel) {
    setCurrentChannel(channel);
    navigation.navigate("Dm")
  }
  return (
    <View style={{ flex: 1 }}>
      <ChannelList onSelect={channelButton} />
    </View>
  );
};

export default StreamChatList;

const styles = StyleSheet.create({});
