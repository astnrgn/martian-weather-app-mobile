import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleDescription}>Fourth</Text>
          <Text style={styles.titleDescription}> Rock Weather</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: '#fbf7f5',
    padding: '5%',
  },
  titleDescription: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 40,
  },
});
