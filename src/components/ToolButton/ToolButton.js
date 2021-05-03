import * as React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#06B6D4',
    padding: 13,
    borderRadius: 100,
    marginRight: 10,
  },
});

export default function ToolButton({type, onPress, name}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon type={type} name={name} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
