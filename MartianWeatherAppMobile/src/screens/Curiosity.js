import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import CuriosityComponent from '../components/Curiosity';

class Curiosity extends React.Component {
  static navigationOptions = {
    title: 'Curiosity',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CuriosityComponent></CuriosityComponent>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default Curiosity;
