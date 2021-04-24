import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import ActionButtons from './ActionButtons';
import CheckIcon from "../Icons/check-icon.png"
import ArrowIcon from "../Icons/rightArrow.png"
import WrongIcon from "../Icons/wrong-icon.png"

storiesOf('ActionButtons', module)
  .addDecorator((story) => <View style={{alignItems: "center"}}>{story()}</View>)
  .add('Learn', () => (
    <ActionButtons onPress={action('clicked next button')}>
        <Text style={{color:"#06B6D4"}}>Learn</Text>
        <Image source={ArrowIcon} style={{width: 16}}/>
    </ActionButtons>
  ))
  
   .add('Pick', () => (
    <ActionButtons onPress={action('clicked next button')}>
        <Text style={{color: "#06B6D4"}}>Pick</Text>
        <Image source={ArrowIcon} style={{width: 16}}/>
    </ActionButtons>
  ))
   .add('correct', () => (
    <ActionButtons onPress={action('clicked next button')}>
        <Text style={{color: "#06D440"}}>Correct</Text>
        <Image source={CheckIcon} style={{width: 16}}/>
    </ActionButtons>
  ))
   .add('Wrong', () => (
    <ActionButtons onPress={action('clicked next button')}>
        <Text style={{color: "#D4068E"}}>Wrong</Text>
        <Image source={WrongIcon} style={{width: 16}}/>
    </ActionButtons>
  ))
  