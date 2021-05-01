import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';
import ListItem from '../ListItem/ListItem';

export default function List({data, text, textColor, listTheme}) {
  return (
    <SafeAreaView>
      <FlatList
        style={{backgroundColor: `${listTheme}`}}
        text={text}
        data={data}
        renderItem={({item}) => (
          <ListItem
            textColor={textColor}
            text={item.name.en}
            onPress={action(`clicked ${item.name.en}`)}
          />
        )}
      />
    </SafeAreaView>
  );
}
