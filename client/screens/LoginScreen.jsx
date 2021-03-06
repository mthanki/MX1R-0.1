import * as React from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { ThemedButton } from "../components/ThemedButton";
import { ThemedTextInput } from "../components/form/formItems/TextField";
import AuthScreenContainer from "../components/containers/AuthScreensContainer";
import login from "../apis/login";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

export default function LoginScreen() {
  const handleSubmit = async ({ username, password }) => {
    const response = await login(username, password);
    console.log(response);
  };

  return (
    <AuthScreenContainer>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <ThemedTextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              style={{ marginTop: 10 }}
              placeholder="Neo"
            />
            <ThemedTextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
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
                  color: "silver",
                  fontSize: 18,
                }}
              >
                Go --
              </Text>
            </ThemedButton>
          </View>
        )}
      </Formik>
    </AuthScreenContainer>
  );
}
