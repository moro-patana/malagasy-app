import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import List from '../components/List/List';
import data from '../data/categories.json';
import ToolButton from '../components/ToolButton/ToolButton';

export default function Home() {
  return (
    <SafeAreaView>
      <List data={data.categories} />
      <ToolButton />
    </SafeAreaView>
  );
}
