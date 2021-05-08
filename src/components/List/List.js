import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';
import ListItem from '../ListItem/ListItem';

export default function List({data, text, onPress, navigation}) {
  return (
    <SafeAreaView>
      <FlatList
        style={{backgroundColor: '#FFFFFF'}}
        text={text}
        data={data}
        renderItem={({item}) => (
          <ListItem
            textColor="#111827"
            text={item.name.en}
            onPress={() => {
              navigation.navigate('Learn', {
                text: item.name.en,
                itemId1: item.phrasesIds.map(item => item),
              });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}
