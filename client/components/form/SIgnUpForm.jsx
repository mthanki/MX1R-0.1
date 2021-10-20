import * as React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { ThemedTextInput } from "./formItems/TextField";
import { ThemedButton } from "../ThemedButton";

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

export function SignUpForm() {
  return (
    <Formik
      initialValues={{ username: "", password: "", matchPassword: "" }}
      onSubmit={(values) => console.log(values)}
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
  );
}
