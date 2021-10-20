import * as React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { ThemedButton } from "../components/ThemedButton";
import { ThemedTextInput } from "../components/form/formItems/TextField";
import AuthScreenContainer from "../components/containers/AuthScreensContainer";
import signUp from "../apis/signUp";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

export default function SignUpScreen() {
  const handleSubmit = async ({ username, password, matchPassword }) => {
    const response = await signUp(username, password, matchPassword);
    console.log(response);
  };

  return (
    <AuthScreenContainer>
      <Formik
        initialValues={{ username: "", password: "", matchPassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={SignUpSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <ThemedTextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              style={{ marginTop: 10 }}
              clearButtonMode="always"
              placeholder="Neo"
            />
            <ThemedTextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={{ marginTop: 10 }}
              placeholder="~#Rand0m"
            />
            <ThemedTextInput
              onChangeText={handleChange("matchPassword")}
              onBlur={handleBlur("matchPassword")}
              value={values.matchPassword}
              style={{ marginTop: 10 }}
              placeholder="~#Rand0m"
            />
            <ThemedButton
              onPress={handleSubmit}
              style={{ marginTop: 40 }}
              title="Submit"
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Start --
              </Text>
            </ThemedButton>
          </View>
        )}
      </Formik>
    </AuthScreenContainer>
  );
}
