import * as React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 23,
    }
})
export default function ActionButtons({children, onPress = () => {}}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {children}
        </TouchableOpacity>
    )
}