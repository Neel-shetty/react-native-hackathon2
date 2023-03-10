import { useEffect } from "react";
import { createContext, useContext } from "react";
import { StreamChat } from "stream-chat";
import { STREAM_ACCESS_KEY } from "@env";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { OverlayProvider, Chat, DeepPartial, Theme } from "stream-chat-expo";
import { ActivityIndicator, View } from "react-native";
import Layout, { width } from "../components/constants/Layout";
import { useNavigation } from "@react-navigation/native";
// import * as AWS from 'aws-sdk/dist/aws-sdk-react-native'

const ChatContext = createContext({});

const ChatContextProvider = ({ children }) => {
  const [chatClient, setChatClient] = useState();
  const [currentChannel, setCurrentChannel] = useState();
  const [globalChat, setGlobalChat] = useState();
  const navigation = useNavigation();

  //connect user and start global chat
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
        name: "new team",
        image: "https://randomuser.me/api/portraits/med/women/76.jpg",
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

  //start dm chat
  async function startPrivateChat(chatWithUser) {
    console.log("starting chat room with", user);
    const newChannel = chatClient.channel("messaging", {
      members: [chatClient.userID, chatWithUser.id],
    });
    await newChannel.watch();
    setCurrentChannel(newChannel);
    navigation.navigate("Dm");
  }

  if (!chatClient) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  const value = {
    chatClient,
    currentChannel,
    setCurrentChannel,
    username: "idk",
  };
  return (
    <OverlayProvider value={{ style: theme }}>
      <Chat client={chatClient}>
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
      </Chat>
    </OverlayProvider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;


const theme: DeepPartial<Theme> = {
  avatar: {
    container: {
      width: 68.53,
      height: 65.64,
      // backgroundColor: "red",
      borderWidth: 1,
      borderRadius: 35,
    },
    BASE_AVATAR_SIZE: 72,
    image: {
      height: 62,
      width: 62,
    },
  },
  groupAvatar: {
    container: {
      height: 66,
      width: 66,
    },
    image: {
      height: 62,
      width: 62,
    },
  },
  channel: {
    selectChannel: {
      backgroundColor: "red",
    },
  },
  channelListMessenger: {
    flatListContent: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    flatList: {
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  channelPreview: {
    container: {
      height: 103.45,
      // width: Layout.PaddingH,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      borderWidth: 1,
      borderColor: "#E5E5E5",
      borderRadius: 33,
      // flexDirection: "row",
      marginVertical: 8,
      marginHorizontal: width - Layout.PaddingH - 20,
      alignItems: "center",
    },
    title: {
      fontFamily: "poppins-regular",
      fontSize: 14.8,
      color: "black",
      fontWeight: "600",
    },
    message: {
      fontFamily: "poppins-regular",
      fontSize: 12.8,
      color: "#656565",
    },
    contentContainer: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      height: 65,
      // backgroundColor:'red'
    },
    date: {
      display: "none",
    },
  },
  channel: {
    selectChannel: {
      // alignItems:'center'
    },
  },
  messageSimple: {
    container: {
      // backgroundColor:'red'
    },
    card: {
      container: {
        // backgroundColor: "red",
        // borderWidth: 2,
      },
    },
  },
  messageList: {
    container: {
      backgroundColor: "white",
    },
    messageSystem: {
      container: {
        // backgroundColor:'violet'
      },
      line: {
        // backgroundColor:'red'
      },
      text: {
        fontFamily: "poppins-regular",
        fontSize: 12.8,
        color: "#656565",
      },
      textContainer: {},
    },
    contentContainer: {
      // backgroundColor:'red',
    },
    listContainer: {
      // backgroundColor:'violet',
    },
  },
  reply: {
    container: {
      backgroundColor: "cyan",
    },
  },
};
