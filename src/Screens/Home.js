import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import data from '../data/categories.json';
import List from '../components/List/List';
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';
const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default function Home({navigation, value, onPress, textColor}) {
  return (
    <View style={{flex: 1, padding: 23}}>
      <View style={styles.buttonContainer}>
        <ToolButton
          type="material-community"
          name="plus"
          color="#FFFFFF"
          onPress={onPress}
        />
        <LanguageSwitch
          text1="EN"
          type="material-community"
          name="swap-horizontal"
          color="#FFFFFF"
          onPress={onPress}
          text2="MA"
        />
        <ToolButton
          type="material-community"
          name="check"
          color="#FFFFFF"
          onPress={onPress}
        />

        <ToolButton
          type="material-community"
          name="check-all"
          color="#FFFFFF"
          onPress={onPress}
        />

        <ToolButton
          type="material-community"
          name="brightness-6"
          color="#FFFFFF"
          onPress={onPress}
        />
      </View>

      <SectionHeading
        label="Select a category:"
        value={value}
        textColor={textColor}
      />
      <List
        data={data.categories}
        textColor={textColor}
        onPress={onPress}
        navigation={navigation}
      />
    </View>
  );
}
