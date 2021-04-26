import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
export default function LanguageSwitch({
  text,
  name,
  color,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
      <Icon type="material-community" name={name} color={color} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
