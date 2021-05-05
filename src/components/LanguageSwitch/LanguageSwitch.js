import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    padding: 11,
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  icon: {
    paddingHorizontal: 5.79,
  },
});
export default function LanguageSwitch({
  text1,
  text2,
  name,
  color,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text1}</Text>
      <Icon
        type="material-community"
        name={name}
        color={color}
        style={styles.icon}
      />
      <Text style={styles.text}>{text2}</Text>
    </TouchableOpacity>
  );
}
