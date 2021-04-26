import * as React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

export default function ToolButton({name, onPress = () => {}}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon type="material-community" name={name} color={color} />
    </TouchableOpacity>
  );
}
