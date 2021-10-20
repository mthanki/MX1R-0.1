import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthScreenContainer from "../components/containers/AuthScreensContainer";
import { ThemedButton } from "../components/ThemedButton";

export default function StartUpScreen({ navigation }) {
  return (
    <AuthScreenContainer>
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
        <Text style={{ textAlign: "center", padding: 10, color: "silver" }}>
          Can't access your account?
        </Text>
      </View>
    </AuthScreenContainer>
  );
}

const styles = StyleSheet.create({});
