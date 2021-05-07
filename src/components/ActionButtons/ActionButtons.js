import * as React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 17,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
});
export default function ActionButtons({
  text,
  optionText,
  name,
  color,
  phrase,
  listRef,
  setIsCorrect,
  setIsClicked,
  value,
  blue,
  setBlue,
  green,
  setGreen,
  red,
  setRed,
}) {
  function selectAnswer(e) {
    e.preventDefault();
    if (optionText === phrase?.name.en) {
      setIsClicked(true);
      setIsCorrect(true);
      setBlue(false);
      setGreen(true);
      console.log(true);
    } else {
      setIsCorrect(true);
      setBlue(false);
      setRed(true);
      console.log(false);
    }
  }
  return (
    <TouchableOpacity
      onPress={selectAnswer}
      style={styles.container}
      value={value}
      ref={optionText === phrase?.name?.en ? listRef : null}>
      <Text>{optionText}</Text>
      <View style={styles.buttonContainer}>
        <Text style={[styles.text, {color: `${color}`}]}>{text}</Text>
        <Icon type="material-community" name={name} color={color} />
      </View>
    </TouchableOpacity>
  );
}
