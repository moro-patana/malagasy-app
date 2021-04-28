import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';

const data = [
  {key: 1, title: 'All'},
  {key: 2, title: 'Food'},
  {key: 3, title: 'Greetings'},
  {key: 4, title: 'At the restaurant'},
  {key: 5, title: 'An unncessessarly loooong cat... '},
  {key: 6, title: 'Single Words'},
  {key: 7, title: 'At the market'},
];
export default function List({renderItem, onPress = () => {}}) {
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} onPress={onPress} />
    </SafeAreaView>
  );
}
