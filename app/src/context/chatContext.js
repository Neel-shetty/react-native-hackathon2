import { useEffect } from "react";
import { createContext, useContext } from "react";
import { StreamChat } from "stream-chat";
import { STREAM_ACCESS_KEY } from "@env";
import { Auth } from "aws-amplify";
import { useState } from "react";

const ChatContext = createContext({});

const ChatContextProvider = ({ children }) => {
  const [chatClient, setChatClient] = useState();
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

  const value = { username: "cyka blyat" };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;
