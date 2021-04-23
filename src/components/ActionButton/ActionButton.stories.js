import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ActionButton from './ActionButton';

const styles = StyleSheet.create({
    nextButton: {
      width: 90,
      height: 40,
      backgroundColor: "#06B6D4",
      borderRadius: 30,
      paddingHorizontal: 27,
      paddingVertical: 11,
      margin: 11,
    },
    addButton: {
      width: 90,
      height: 40,
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      paddingHorizontal: 27,
      paddingVertical: 11,
      margin: 11,
      borderWidth: 1,
      borderColor:"#06B6D4",
    },
    text: {
        textAlign: "center",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        color: "#FFFFFF",

            }
})

storiesOf("ActionButton", module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('next button', () => (
    <ActionButton style={styles.nextButton} onPress={action('clicked-text')}>
      <Text style={styles.text}>Next</Text>
    </ActionButton>
  ))
  .add('add button', () => (
    <ActionButton style={styles.addButton} onPress={action('clicked-text')}>
      <Text style={{color: "#06B6D4", textAlign: "center"}}>Add</Text>
    </ActionButton>
  ));
