
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './MyComponent';


storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('number', () => <MyComponent label= {'1, 2, 3, 4, 5, 6, 7, 8, 9, 10'}/>)
  