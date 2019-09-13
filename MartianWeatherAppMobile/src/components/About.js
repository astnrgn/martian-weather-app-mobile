import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutDescription}>About</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#fbf7f5',
    padding: '5%',
  },
  aboutDescription: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 42,
    lineHeight: 42,
  },
  superscript: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 21,
  },
});
