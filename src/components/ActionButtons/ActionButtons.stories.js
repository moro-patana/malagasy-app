import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import ActionButtons from './ActionButtons';

storiesOf('ActionButtons', module)
  .addDecorator((story) => <View style={{alignItems: "center"}}>{story()}</View>)
  .add('Learn', () => (
    <ActionButtons 
    onPress={action('clicked learn button')} 
    text={"Learn"}
    name="arrow-right"
    color="#06B6D4"
    />
  ))
  .add('Pick', () => (
    <ActionButtons 
    onPress={action('clicked pick button')} 
    text={"Pick"}
    name="arrow-right"
    color="#06B6D4"
    />
  ))
  .add('Correct', () => (
    <ActionButtons 
    onPress={action('clicked correct button')} 
    text={"Correct"}
    name="check"
    color="#06D440"
    />
  ))
  .add('Wrong', () => (
    <ActionButtons 
    onPress={action('clicked wrong button')} 
    text={"Wrong"}
    name="close"
    color="#D4068E"
    />
  ))
  
  