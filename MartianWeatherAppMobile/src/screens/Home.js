import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import HomeComponent from '../components/Home';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <HomeComponent></HomeComponent>
        <Button
          title="Curiosity Rover"
          onPress={() => this.props.navigation.navigate('Curiosity')}
        />
        <Button
          title="InSight Lander"
          onPress={() => this.props.navigation.navigate('InSight')}
        />
      </View>
    );
  }
}
