import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout, { width } from "../constants/Layout";
import { GlobalStyles } from "../constants/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useChatContext } from "../../context/chatContext";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { currentChannel,setCurrentChannel } = useChatContext();
  // console.log("🚀 ~ file: Header.js:10 ~ Header ~ currentChannel", currentChannel.data.image)
  const navigation = useNavigation();
  function backButton() {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
      {/* <View style={styles.backContainer}>
        <TouchableOpacity onPress={backButton}>
          <Ionicons name="arrow-back" size={35} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.circle}>
            <Image
              source={{
                uri: currentChannel?.data?.image,
              }}
              style={{ height: 71.67, width: 69.7, borderRadius: 75 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{currentChannel?.data?.name}</Text>
          <Text style={styles.status}>online</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    height: 135,
    width: width - width * 0.06,
    backgroundColor: GlobalStyles.colors.blue,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 34,
    alignItems:'center',
    justifyContent: "center",
  },
  backContainer: {
    width: Layout.PaddingH,
    alignSelf: "center",
    flex: 1.5,
    justifyContent: "center",
    // backgroundColor:'pink',
    paddingLeft: 10,
    paddingTop: 20,
  },
  container: {
    flexDirection: "row",
    // flex: 5,
    paddingBottom: 20,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    transform: [{ rotate: "-45deg" },{translateX:-10},{translateY:10}],
    // backgroundColor:'violet'
  },
  circle: {
    marginLeft: 20,
    height: 78.73,
    width: 76.57,
    borderWidth: 1,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
  },
  textContainer: {
    justifyContent: "center",
    flex: 2,
    paddingLeft: 10,
  },
  name: {
    fontFamily: "poppins-regular",
    fontSize: 20,
  },
  status: {
    fontFamily: "poppins-regular",
    fontSize: 12.8,
    color: "#656565",
  },
});
