import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import LanguageSwitch from './LanguageSwitch';

storiesOf('LanguageSwitch', module)
  .addDecorator(story => (
    <View style={[{alignItems: 'center'}, {margin: 20}]}>{story()}</View>
  ))
  .add('Switch language', () => (
    <LanguageSwitch
      onPress={action('switch language')}
      text1={'EN'}
      text2={'MA'}
      name="swap-horizontal"
      color="#FFFFFF"
    />
  ));
