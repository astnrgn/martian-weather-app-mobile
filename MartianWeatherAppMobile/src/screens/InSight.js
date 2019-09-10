import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import InSightComponent from '../components/InSight';

class InSight extends React.Component {
  static navigationOptions = {
    title: 'InSight',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <InSightComponent></InSightComponent>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default InSight;
