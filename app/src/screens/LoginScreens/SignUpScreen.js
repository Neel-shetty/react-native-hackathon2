import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsconfig from "../../aws-exports";

// Amplify.configure(awsconfig);

const SignUpScreen = () => {
  return (
    <View>
      <Button
        title="Login"
        onPress={() =>
          Auth.federatedSignIn({
            provider: "Google",
          })
        }
      />
      <Button title="LOG OUT" onPress={() => Auth.signOut()} />
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
