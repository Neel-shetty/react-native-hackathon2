import { createContext, useContext } from "react";

const ChatContext = createContext({});

const ChatContextProvider = ({ children }) => {
  const value = { username: "cyka blyat" };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;
