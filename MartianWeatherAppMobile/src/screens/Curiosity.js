import React from 'react';
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
export default Home;
