import * as React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06B6D4",
    paddingVertical: 11,
    paddingHorizontal: 27,
    borderRadius: 30,
    margin: 20,
  },
  containerDisabled: {
    backgroundColor: 'transparent',
    borderColor: "#06B6D4",
    borderWidth: 1,
    borderColor: "#06B6D4",
  },

  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    textAlign: "center",
  },
  blueText: {
    color: "#06B6D4",
  },
});

export default function NextButton({
  children, 
  onPress = () => {},
  disabled = false
}) {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (disabled) {
    containerStyles.push(styles.containerDisabled);
    textStyles.push(styles.blueText);
  }
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled ? true : false} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  )
}