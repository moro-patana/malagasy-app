import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {Icon} from 'react-native-elements';
import List from './List';
const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
    <TouchableOpacity onPress={action('clicked next button')}>
      <Text>Learn</Text>
      <Icon type="material-community" name="arrow-right" color="#06B6D4" />
    </TouchableOpacity>
  </View>
);

storiesOf('List', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('List', () => (
    <List renderItem={({item}) => <Item title={item.title} />} />
  ));
