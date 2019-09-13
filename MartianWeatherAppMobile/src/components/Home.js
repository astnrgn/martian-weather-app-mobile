import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleDescription}>Fourth Rock Weather</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  titleDescription: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 33,
  },
});
