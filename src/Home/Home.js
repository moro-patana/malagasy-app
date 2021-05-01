import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import List from '../components/List/List';
import data from '../data/categories.json';

export default function Home() {
  return (
    <SafeAreaView>
      <List data={data.categories} />
    </SafeAreaView>
  );
}
