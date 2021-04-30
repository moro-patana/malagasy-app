import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from '../components/List/List';

export default function Home({data}) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <List data={data} />
    </SafeAreaView>
  );
}
