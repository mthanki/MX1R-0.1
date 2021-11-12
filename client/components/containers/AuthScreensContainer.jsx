import React from "react";
import {
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Brand } from "../brand";
import { ClickableLinkText } from "../ClickableText";

export default function AuthScreenContainer(props) {
  const handleTermsClick = () => {
    Linking.openURL("https://google.com");
  };

  return (
    <ImageBackground
      source={require("../../assets/StartUpScreenBG.png")}
      style={styles.bg}
    >
      <Brand />
      <View style={styles.itemContainer}>{props.children}</View>
      {props.showTerms && (
        <Text
          style={{
            padding: 14,
            textAlign: "center",
            color: "white",
            marginBottom: 10,
            position: "absolute",
            bottom: 0,
          }}
        >
          By using blackbox you agree to our
          <Text
            style={styles.link}
            onPress={handleTermsClick}
          >{` Terms and Conditions `}</Text>
          {`and`}
          <Text
            style={styles.link}
            onPress={handleTermsClick}
          >{` Privacy Policy. `}</Text>
        </Text>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
