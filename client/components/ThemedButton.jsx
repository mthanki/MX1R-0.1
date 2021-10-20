import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export function ThemedButton(props) {
  return (
    <TouchableOpacity {...props} style={[props.style, styles.button]}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "silver",
    borderWidth: 1,
    padding: 17,
    width: 380,
    borderRadius: 20,
  },
});
