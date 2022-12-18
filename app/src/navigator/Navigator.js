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
  const [customState, setCustomState] = useState(null);

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
      console.log(
        "🚀 ~ file: SignUpScreen.js:35 ~ useEffect ~ userInfo",
        userInfo
      );
    }
    if (user) {
      // ui();
    }
    return unsubscribe;
  }, []);

  const AuthenticatedStack = () => {
    return (
      <ChatContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dm"
            component={DmScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </ChatContextProvider>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        {user ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthenticatedStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
