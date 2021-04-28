import * as React from 'react';
import {FlatList} from 'react-native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 17,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default function ListItem({data, onPress = () => {}}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.list}>
            <Text>{item.key}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#06B6D4'}}>Learn</Text>
              <Icon
                type="material-community"
                name="arrow-right"
                color="#06B6D4"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
