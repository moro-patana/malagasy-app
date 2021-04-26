import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06B6D4',
    padding: 13,
    borderRadius: 100,
    marginTop: 20,
  },
});

export default function ToolButton({name, onPress = () => {}}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon type="material-community" name={name} color="#FFFFFF" />
    </TouchableOpacity>
  );
}
