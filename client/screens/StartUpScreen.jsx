import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthScreenContainer from "../components/containers/AuthScreensContainer";
import { ThemedButton } from "../components/ThemedButton";

export default function StartUpScreen({ navigation }) {
  const handleAccRecoverClick = () => {
    Linking.openURL("https://google.com");
  };

  return (
    <AuthScreenContainer showTerms>
      <View>
        <ThemedButton
          onPress={() => navigation.push("SignUpScreen")}
          style={{ marginTop: 10 }}
        >
          <Text
            style={{
              color: "silver",
              fontSize: 18,
            }}
          >
            <Text style={{ textDecorationLine: "underline" }}>Create</Text> an
            account
          </Text>
        </ThemedButton>
        <ThemedButton
          onPress={() => navigation.push("LoginScreen")}
          style={{ marginTop: 10 }}
        >
          <Text
            style={{
              color: "silver",
              fontSize: 18,
            }}
          >
            Use{" "}
            <Text style={{ textDecorationLine: "underline" }}>existing</Text>{" "}
            account
          </Text>
        </ThemedButton>
        <TouchableOpacity onPress={handleAccRecoverClick}>
          <Text
            style={{ textAlign: "center", padding: 10, color: "lightblue" }}
          >
            Can't access your account?
          </Text>
        </TouchableOpacity>
      </View>
    </AuthScreenContainer>
  );
}

const styles = StyleSheet.create({});
