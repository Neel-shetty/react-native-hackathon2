import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import SignUpScreen from "../screens/LoginScreens/SignUpScreen";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsconfig from "../aws-exports";
import DmScreen from "../screens/MainScreens/DmScreen";
import ChatContextProvider from "../context/chatContext";

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [user, setUser] = useState(null);
  // console.log("🚀 ~ file: SignUpScreen.js:10 ~ SignUpScreen ~ user", user);
  const [customState, setCustomState] = useState(null);
  // console.log(
  // "🚀 ~ file: SignUpScreen.js:12 ~ SignUpScreen ~ setCustomState",
  // setCustomState
  // );

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((currentUser) => setUser(currentUser))
      .catch(() => console.log("Not signed in"));
    async function ui() {
      const userInfo = await Auth.currentUserInfo();
      // console.log(
      // "🚀 ~ file: SignUpScreen.js:35 ~ useEffect ~ userInfo",
      // userInfo
      // );
    }
    if (user) {
      ui();
    }
    return unsubscribe;
  }, []);

  return (
    <ChatContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          {user ? (
            <>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Dm" component={DmScreen} />
            </>
          ) : (
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ChatContextProvider>
  );
};

export default Navigator;
