import * as React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import { Icon } from "react-native-elements"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 23,
    },
    text: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        paddingRight: 10,
            }
})
export default function ActionButtons({text, name, color, onPress = () => {}}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={[styles.text, {color: `${color}`}]}>{text}</Text>
            <Icon 
             type="material-community"
             name={name}
             color={color}
            />
        </TouchableOpacity>
    )
}