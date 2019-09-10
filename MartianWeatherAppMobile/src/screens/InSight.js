import React from 'react';
import {Button, View, Text} from 'react-native';
import InSightComponent from '../components/Curiosity';

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
        {/* <Button
          title="Curiosity Rover"
          onPress={() => this.props.navigation.navigate('Curiosity')}
        />
        <Button
          title="InSight Lander"
          onPress={() => this.props.navigation.navigate('InSight')}
        /> */}
      </View>
    );
  }
}
export default InSight;
