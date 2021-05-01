import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingBottom: 15,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});
export default function SectionHeading({label}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </SafeAreaView>
  );
}
