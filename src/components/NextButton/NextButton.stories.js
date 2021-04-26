import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import NextButton from './NextButton';

storiesOf('NextButton', module)
  .addDecorator(story => <View style={{alignItems: 'center'}}>{story()}</View>)
  .add('next button', () => (
    <NextButton onPress={action('clicked next button')}>Next</NextButton>
  ))
  .add('add button', () => (
    <NextButton onPress={action('clicked add button')}>Add</NextButton>
  ))
  .add('disabled button', () => <NextButton disabled>Add</NextButton>);
