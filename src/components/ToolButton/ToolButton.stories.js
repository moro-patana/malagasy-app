import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, Image, Text} from 'react-native';
import ToolButton from './ToolButton';

storiesOf('ToolButton', module)
  .addDecorator(story => <View style={{alignItems: 'center'}}>{story()}</View>)
  .add('Add', () => (
    <ToolButton onPress={action('clicked add button')} name="plus" />
  ))
  .add('Check', () => (
    <ToolButton onPress={action('clicked check button')} name="check" />
  ))
  .add('Check-all', () => (
    <ToolButton onPress={action('clicked check-all button')} name="check-all" />
  ))
  .add('Go back', () => (
    <ToolButton
      onPress={action('clicked go back button')}
      name="chevron-left"
    />
  ))
  .add('Theme', () => (
    <ToolButton onPress={action('clicked theme button')} name="brightness-6" />
  ));
