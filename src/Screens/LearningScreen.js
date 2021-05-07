import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PhraseTextArea from '../components/PhraseTextArea/PhraseTextArea';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import PhraseData from '../data/phrases.json';
import NextButton from '../components/NextButton/NextButton';
const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default function LearnScreen({
  onPress = () => {},
  navigation,
  onChange,
  disabled,
  style,
  route,
  text,
  name,
}) {
  const [answerText, setAnswerText] = useState([]);
  const [phrase, setPhrase] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [target, setTarget] = useState({});
  const [wrongAnswer, setWrongAnswer] = useState({});
  function getData() {
    let indexes = new Set([
      Math.floor(Math.random() * route.params.itemId1.length),
    ]);
    while (indexes.size < route.params.itemId1.length) {
      indexes.add(Math.floor(Math.random() * route.params.itemId1.length));
    }
    indexes = [...indexes];
    const answerOption1 = route.params.itemId1[indexes[0]];
    const answerOption2 = route.params.itemId1[indexes[1]];
    const answerOption3 = route.params.itemId1[indexes[2]];
    const answerOption4 = route.params.itemId1[indexes[3]];
    const option1 = PhraseData.phrases.find(item => item.id === answerOption1);
    const option2 = PhraseData.phrases.find(item => item.id === answerOption2);
    const option3 = PhraseData.phrases.find(item => item.id === answerOption3);
    const option4 = PhraseData.phrases.find(item => item.id === answerOption4);
    const answerOptions = [option3, option1, option4, option2].sort(() => {
      return 0.5 - Math.random();
    });
    setAnswerText(answerOptions);
    setPhrase(option1);
  }

  useEffect(() => {
    getData();
  }, []);

  function nextPhrase() {
    getData();
    setIsClicked(false);
  }
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
      <SectionHeading label="Category: " value={route.params.text} />
      <SectionHeading label="The phrase:" />
      <PhraseTextArea
        style={style}
        phrase={phrase?.name?.mg}
        editable={false}
        onChangeText={onChange}
        multiline={true}
      />
      <SectionHeading label="Pick a solution:" />
      {answerText.map((item, index) => (
        <View key={item.id}>
          <ActionButtons
            optionText={item.name.en}
            text={text}
            color="#06B6D4"
            onPress={onPress}
            type="material-community"
            name={name}
            phrase={phrase}
            getData={getData}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            item={item}
            target={target}
            setTarget={setTarget}
            wrongAnswer={wrongAnswer}
            setWrongAnswer={setWrongAnswer}
          />
        </View>
      ))}
      {isClicked && (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: 150,
          }}>
          <NextButton
            text="Next"
            style={style}
            onPress={nextPhrase}
            disabled={disabled}
          />
        </View>
      )}
    </View>
  );
}
