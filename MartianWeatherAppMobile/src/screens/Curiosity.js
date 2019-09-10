import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import CuriosityComponent from '../components/Curiosity';

export default class Curiosity extends React.Component {
  static navigationOptions = {
    title: 'Curiosity',
  };
  render() {
    return (
      <View style={styles.curiosityPage}>
        <CuriosityComponent></CuriosityComponent>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  curiosityPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'IBM Plex Sans',
    backgroundColor: 'blue',
  },
});
