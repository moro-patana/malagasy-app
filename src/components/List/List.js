import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';
import ListItem from '../ListItem/ListItem';

export default function List({data, text}) {
  return (
    <SafeAreaView>
      <FlatList
        text={text}
        data={data}
        renderItem={({item}) => (
          <ListItem
            text={item.name.en}
            onPress={action(`clicked ${item.name.en}`)}
          />
        )}
      />
    </SafeAreaView>
  );
}
