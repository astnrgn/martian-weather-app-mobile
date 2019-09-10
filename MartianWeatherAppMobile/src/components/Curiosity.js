import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Text,
  ImageBackground,
} from 'react-native';

export default class CuriosityComponent extends Component {
  render() {
    return (
      <View style={styles.curiosityContainer}>
        <Text>High</Text>
        <Text>Low</Text>
        <View style={styles.dataContainer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  curiosityContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // height: '100%',
    // width: '100%',
  },
  dataContainer: {
    backgroundColor: 'white',
    height: '60%',
    width: '100%',
  },
});
