import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default function SectionHeading({label}) {
  return (
    <SafeAreaView>
      <Text>{label}</Text>
    </SafeAreaView>
  );
}
