import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const GetStartedScreen = () => {
  const navigation = useNavigation();
return (
  <SafeAreaView style={styles.container}>
    <StatusBar showHideTransition backgroundColor={COLORS.primary} />
    <Image
      style={styles.image}
      source={require("../../../Constants/loading2.gif")}
    />
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: COLORS.tertiary,
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
      }}
    >
      <Image
        style={styles.image2}
        source={require("../../../Constants/loading.gif")}
      />
      <Text style={styles.headerText}> Campus Buddy </Text>
      <Text style={styles.text}>
        {" "}
       {" "}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateDonationPostScreen");
        }}
      >
        <Text style={styles.Button2}> Get Started </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);};

export default GetStartedScreen;
