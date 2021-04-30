import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';

export default function List({data, text, renderItem, onPress = () => {}}) {
  return (
    <SafeAreaView>
      <FlatList
        text={text}
        data={data}
        renderItem={renderItem}
        onPress={onPress}
      />
    </SafeAreaView>
  );
}
