import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../constants/Layout";

const ChatItem = ({ data }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <View style={styles.circle}>
          <Image
            source={{
              uri: data.image,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  root: {
    height: 103.45,
    width: Layout.PaddingH,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 33,
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingLeft: 8,
  },
  image: {
    height: 62,
    width: 62,
    borderRadius: 62 / 2,
  },
  textContainer: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 65,
    paddingLeft: 15,
  },
  name: {
    fontFamily: "poppins-regular",
    fontSize: 12.8,
    color: "black",
  },
  text: {
    fontFamily: "poppins-regular",
    fontSize: 12.8,
    color: "#656565",
  },
  circle: {
    height: 66.64,
    width: 68.53,
    borderRadius: 35,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
