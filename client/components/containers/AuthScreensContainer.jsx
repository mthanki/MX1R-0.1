import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Brand } from "../brand";

export default function AuthScreenContainer(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/StartUpScreenBG.png")}
        style={styles.bg}
      >
        <View>
          <Brand />
        </View>
        <View style={styles.itemContainer}>{props.children}</View>
        <Text
          style={{
            padding: 14,
            textAlign: "center",
            color: "white",
            marginBottom: 10,
          }}
        >
          By using blackbox you agree to our{" "}
          <Text style={styles.link}>Terms and Conditions</Text> and{" "}
          <Text style={styles.link}>Privacy Policy.</Text>
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  link: {
    color: "lightblue",
  },
});
