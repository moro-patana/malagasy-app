import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PhraseTextArea from '../components/PhraseTextArea/PhraseTextArea';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import PhraseData from '../data/phrases.json';
const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default function Learn({onPress, navigation, onChange, style, route}) {
  console.log(route.params.text);
  const mapItem = PhraseData.phrases.find(
    item => item.id === route.params.itemId,
  );
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
      <SectionHeading label="Category:" value={route.params.text} />
      <SectionHeading label="The phrase:" />
      <PhraseTextArea
        style={style}
        phrase={mapItem.name.mg}
        editable={false}
        onChangeText={onChange}
        multiline={true}
      />
      <SectionHeading label="Pick a solution:" />
      {PhraseData.phrases.slice(0, 4).map(item => (
        <View key={item.id}>
          <ActionButtons
            optionText={item.name.en}
            text="Pick"
            color="#06B6D4"
            onPress={onPress}
            type="material-community"
            name="arrow-right"
          />
        </View>
      ))}
    </View>
  );
}
