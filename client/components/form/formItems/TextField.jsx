import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

export function ThemedTextInput(props) {
  return (
    <TextInput
      {...props}
      clearButtonMode="while-editing"
      autoCorrect={false}
      style={[props.style, styles.style]}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  style: {
    width: 380,
    borderRadius: 10,
    borderColor: "silver",
    // borderWidth: 5,
    padding: 17,
    fontSize: 18,
    backgroundColor: "whitesmoke",
    paddingLeft: 23,
  },
});
