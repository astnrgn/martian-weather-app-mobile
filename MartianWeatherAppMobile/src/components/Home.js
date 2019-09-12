import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Shimmer from 'react-native-shimmer';

export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Shimmer>
            <Text style={styles.titleDescription}>4</Text>
          </Shimmer>
          <Shimmer>
            <Text style={styles.superscript}>th</Text>
          </Shimmer>
          <Shimmer>
            <Text style={styles.titleDescription}> Rock Weather</Text>
          </Shimmer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#fbf7f5',
    padding: '5%',
  },
  titleDescription: {
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
