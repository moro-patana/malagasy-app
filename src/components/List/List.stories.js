import * as React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import data from '../../data/categories.json';
import List from './List';
import ListItem from '../ListItem/ListItem';

storiesOf('List', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Category List', () => (
    <List
      data={data.categories}
      renderItem={({item}) => (
        <ListItem
          text={item.name.en}
          onPress={() => navigation.navigate('Details')}
        />
      )}
    />
  ));
