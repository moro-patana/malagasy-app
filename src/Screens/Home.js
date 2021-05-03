import * as React from 'react';
import {View} from 'react-native';
import data from '../data/categories.json';
import List from '../components/List/List';
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';

export default function Home({
  navigation,
  name,
  onPress,
  switchTheme,
  textColor,
  listTheme,
}) {
  return (
    <View style={{flex: 1, padding: 23}}>
      <ToolButton
        type="material-community"
        name={name}
        color={textColor}
        onPress={onPress}
        switchTheme={switchTheme}
      />
      <SectionHeading label="Select a category:" textColor={textColor} />
      <List
        data={data.categories}
        textColor={textColor}
        listTheme={listTheme}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
