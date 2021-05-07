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
  optionText,
  name,
  color,
  phrase,
  isClicked,
  setIsClicked,
  item,
  setTarget,
  wrongAnswer,
  setWrongAnswer,
}) {
  function selectAnswer(e) {
    if (optionText === phrase?.name.en) {
      setIsClicked(true);
    } else {
      setIsClicked(true);
      setTarget(e);
      setWrongAnswer(e);
    }
  }
  const wrong = isClicked && wrongAnswer !== phrase && wrongAnswer === item;
  return (
    <TouchableOpacity
      onPress={() => selectAnswer(item)}
      style={styles.container}>
      <Text>{optionText}</Text>
      <View style={styles.buttonContainer}>
        <Text
          style={[
            styles.text,
            {
              color:
                isClicked && phrase === item
                  ? '#06D440'
                  : wrong
                  ? '#D4068E'
                  : `${color}`,
            },
          ]}>
          {isClicked && phrase === item ? 'Correct' : wrong ? 'Wrong' : 'Pick'}
        </Text>
        <Icon
          type="material-community"
          name={
            isClicked && phrase === item
              ? 'check'
              : wrong
              ? 'close'
              : 'arrow-right'
          }
          color={
            isClicked && phrase === item
              ? '#06D440'
              : wrong
              ? '#D4068E'
              : `${color}`
          }
        />
      </View>
    </TouchableOpacity>
  );
}
