import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import ActionButton from './ActionButton';

storiesOf('ActionButton', module)
  .addDecorator((story) => <View style={{alignItems: "center"}}>{story()}</View>)
  .add('next button', () => (
    <ActionButton onPress={action('clicked next button')}>Next</ActionButton>
  ))
  .add('add button', () => (
    <ActionButton onPress={action('clicked add button')}>Add</ActionButton>
  ))
  .add('disabled button', () => (
    <ActionButton disabled>Add</ActionButton>
  ))
 
