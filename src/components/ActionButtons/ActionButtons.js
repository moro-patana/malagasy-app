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
  phrase,
  isClicked,
  setIsClicked,
  item,
}) {
  function selectAnswer(e) {
    console.log(e);
    if (optionText === phrase?.name.en) {
      setIsClicked(true);
    }
    if (e.target !== phrase?.name.en) {
      setIsClicked(true);
      console.log(false);
    }
  }
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
                isClicked && optionText === phrase?.name.en
                  ? 'green'
                  : `${color}`,
            },
          ]}>
          {text}
        </Text>
        <Icon
          type="material-community"
          name={name}
          color={
            isClicked && optionText === phrase?.name.en ? 'green' : `${color}`
          }
        />
      </View>
    </TouchableOpacity>
  );
}
