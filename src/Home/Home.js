import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from '../components/List/List';
import data from '../data/categories.json';
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    paddingVertical: 35,
  },
});
export default function Home({name, color, onPress = () => {}, label}) {
  return (
    <SafeAreaView style={styles.container}>
      <ToolButton
        type="material-community"
        name={name}
        color={color}
        onPress={onPress}
      />
      <SectionHeading label="Select a category:" />
      <List data={data.categories} />
    </SafeAreaView>
  );
}
