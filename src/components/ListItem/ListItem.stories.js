import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Image, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import ListItem from './ListItem';

storiesOf('ListItem', module)
  .addDecorator(story => <View style={{alignItems: 'center'}}>{story()}</View>)
  .add('Category List', () => (
    <ListItem
      data={[
        {key: 'All'},
        {key: 'Food'},
        {key: 'Greetings'},
        {key: 'At the restaurant'},
        {key: 'An unncessessarly loooong cat... '},
        {key: 'Single Words'},
        {key: 'At the market'},
      ]}
      onPress={action('clicked learn button')}
      //   renderItem={({item}) => (
      //     <View
      //       style={[
      //         {display: 'flex'},
      //         {flexDirection: 'row'},
      //         {justifyContent: 'space-between'},
      //         {alignItems: 'center'},
      //         {padding: 17},
      //         {borderWidth: 1},
      //         {borderColor: '#E5E5E5'},
      //       ]}>
      //       <Text>{item.key}</Text>
      //       <TouchableOpacity
      //         onPress={action('clicked learn button')}
      //         style={[
      //           {display: 'flex'},
      //           {flexDirection: 'row'},
      //           {alignItems: 'center'},
      //           {paddingLeft: 10},
      //         ]}>
      //         <Text style={{color: '#06B6D4'}}>Learn</Text>
      //         <Icon
      //           type="material-community"
      //           name="arrow-right"
      //           color="#06B6D4"
      //         />
      //       </TouchableOpacity>
      //     </View>
      //   )}
    />
  ));
