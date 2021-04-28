import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('SectionHeading', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Select category', () => <SectionHeading label={'Select category'} />)
  .add('Seen phrases', () => <SectionHeading label={'Seen phrases'} />)
  .add('Learn phrases', () => <SectionHeading label={'Learn phrases'} />)
  .add('Category', () => <SectionHeading label={'Category'} />)
  .add('The phrase', () => <SectionHeading label={'The phrase'} />)
  .add('Pick a solution', () => <SectionHeading label={'Pick a solution'} />)
  .add('The phrase in English', () => (
    <SectionHeading label={'The phrase in English'} />
  ))
  .add('The phrase in Malagasy', () => (
    <SectionHeading label={'The phrase in Malagasy'} />
  ));
