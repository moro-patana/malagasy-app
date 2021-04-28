import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import ListItem from './ListItem';

storiesOf('ListItem', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('Category List Item', ({title}) => (
    <ListItem
      text={title ? `${title}` : 'All'}
      onPress={action('clicked learn button')}
    />
  ));
