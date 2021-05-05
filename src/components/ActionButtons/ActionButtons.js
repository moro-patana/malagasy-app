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
});
export default function ActionButtons({
  text,
  optionText,
  name,
  color,
  onPress = () => {},
  option1,
  listRef,
  selectAnswer,
  setIsCorrect,
  isCorrect,
}) {
  function selectAnswer(e) {
    if (optionText === option1.name.en) {
      setIsCorrect(true);
      console.log('true');
    } else {
      console.log('false');
      setIsCorrect(false);
    }
  }
  return (
    <TouchableOpacity
      onPress={selectAnswer}
      style={styles.container}
      ref={optionText === option1.name.en ? listRef : null}>
      <Text>{optionText}</Text>
      <View style={styles.buttonContainer}>
        <Text style={[styles.text, {color: `${color}`}]}>{text}</Text>
        <Icon type="material-community" name={name} color={color} />
      </View>
    </TouchableOpacity>
  );
}
