import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from '../components/List/List';
import ListItem from '../components/ListItem/ListItem';
import data from '../data/categories.json';

export default function Home() {
  return (
    <SafeAreaView>
      <List
        data={data}
        renderItem={({item}) => (
          <ListItem
            text={item.title}
            onPress={action(`clicked ${item.title}`)}
          />
        )}
      />
    </SafeAreaView>
  );
}
