import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import ToolButton from './ToolButton';

storiesOf('ToolButton', module)
  .addDecorator(story => <View style={{alignItems: 'center'}}>{story()}</View>)
  .add('Tool buttons', () => (
    <View>
      <ToolButton onPress={action('clicked add button')} name="plus" />
      <ToolButton onPress={action('clicked check button')} name="check" />
      <ToolButton
        onPress={action('clicked check-all button')}
        name="check-all"
      />
      <ToolButton
        onPress={action('clicked go back button')}
        name="chevron-left"
      />
      <ToolButton
        onPress={action('clicked theme button')}
        name="brightness-6"
      />
    </View>
  ));
