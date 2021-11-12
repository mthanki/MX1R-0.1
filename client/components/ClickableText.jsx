import * as React from "react";
import { Linking, StyleSheet, TouchableOpacity, Text } from "react-native";

export function ClickableLinkText(props) {
  const handleLink = () => {
    Linking.openURL(props.link);
  };

  return (
    <TouchableOpacity onPress={handleLink} {...props} style={styles.link}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "lightblue",
  },
});
