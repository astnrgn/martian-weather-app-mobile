import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontSize: 20, lineHeight: 30}}>4</Text>
          <Text style={{fontSize: 15, lineHeight: 18}}>th</Text>
          <Text style={{fontSize: 20, lineHeight: 30}}> Rock Weather</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeTitle: {
    backgroundColor: Colors.lighter,
  },
});
