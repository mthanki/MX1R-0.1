import * as React from "react"
import { Image, StyleSheet } from "react-native"

export function Brand(props) {
  return (
    <Image style={[props.style, styles.brand]} {...props} source={require("../assets/logo.png")}></Image>
  )
}

const styles = StyleSheet.create({
  brand: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
});