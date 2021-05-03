import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';
import ListItem from '../ListItem/ListItem';

export default function List({data, text, onPress}) {
  return (
    <SafeAreaView>
      <FlatList
        style={{backgroundColor: '#FFFFFF'}}
        text={text}
        data={data}
        renderItem={({item}) => (
          <ListItem textColor="#111827" text={item.name.en} onPress={onPress} />
        )}
      />
    </SafeAreaView>
  );
}
