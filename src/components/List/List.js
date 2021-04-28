import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';

export default function List({renderItem}) {
  return (
    <SafeAreaView>
      <FlatList
        data={[
          {key: 1, title: 'All'},
          {key: 2, title: 'Food'},
        ]}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
