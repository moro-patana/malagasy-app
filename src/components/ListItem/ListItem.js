import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 17,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  listText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'right',
    color: '#06B6D4',
    padding: 10,
  },
});

export default function ListItem({text, onPress = () => {}, textColor}) {
  return (
    <View style={styles.list}>
      <Text style={[styles.listText, {color: `${textColor}`}]}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Learn</Text>
        <Icon type="material-community" name="arrow-right" color="#06B6D4" />
      </TouchableOpacity>
    </View>
  );
}
