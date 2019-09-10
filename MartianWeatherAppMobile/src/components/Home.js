import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.titleDescription}>4</Text>
          <Text style={styles.superscript}>th</Text>
          <Text style={styles.titleDescription}> Rock Weather</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#fbf7f5',
    alignContent: 'space-between',
  },
  titleDescription: {
    color: '#fbf7f5',
    // fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 40,
  },
  superscript: {
    color: '#fbf7f5',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
  },
});
