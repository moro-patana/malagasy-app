import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PhraseTextArea from '../components/PhraseTextArea/PhraseTextArea';
import ActionButtons from '../components/ActionButtons/ActionButtons';
const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  optionList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
});
export default function Learn({
  onPress,
  navigation,
  phrase,
  onChange,
  style,
  text,
  color,
}) {
  return (
    <View style={{flex: 1, padding: 23}}>
      <View style={styles.buttonContainer}>
        <ToolButton
          type="material-community"
          name="chevron-left"
          color="#FFFFFF"
          onPress={() => navigation.navigate('Home')}
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
          name="brightness-6"
          color="#FFFFFF"
          onPress={onPress}
        />
      </View>
      <SectionHeading label="Category:" />
      <SectionHeading label="The phrase:" />
      <PhraseTextArea
        style={style}
        value={phrase}
        editable={false}
        onChangeText={onChange}
        multiline={true}
      />
      <SectionHeading label="Pick a solution:" />
      <View style={styles.optionList}>
        <Text>One</Text>
        <ActionButtons
          text="Pick"
          color="#06B6D4"
          onPress={onPress}
          type="material-community"
          name="arrow-right"
        />
      </View>
    </View>
  );
}
