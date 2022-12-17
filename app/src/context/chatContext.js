import { useEffect } from "react";
import { createContext, useContext } from "react";
import { StreamChat } from "stream-chat";
import { STREAM_ACCESS_KEY } from "@env";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { ActivityIndicator } from "react-native";

const ChatContext = createContext({});

const ChatContextProvider = ({ children }) => {
  const [chatClient, setChatClient] = useState();
  const [currentChannel, setCurrentChannel] = useState();
  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance(STREAM_ACCESS_KEY);

      const { username } = await Auth.currentUserInfo();
      await client.connectUser(
        {
          id: username,
          name: "neel",
          image: "https://randomuser.me/api/portraits/med/women/79.jpg",
        },
        client.devToken(username)
      );
      setChatClient(client);
      const globalChat = client.channel("livestream", "global", {
        name: "testgroup",
      });
      await globalChat.watch();
    };
    initChat();
  }, []);

  useEffect(() => {
    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, []);

  if (!chatClient) {
    return <ActivityIndicator />;
  }

  const value = { chatClient, currentChannel, setCurrentChannel, username:'idk' };
  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
      </Chat>
    </OverlayProvider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;
