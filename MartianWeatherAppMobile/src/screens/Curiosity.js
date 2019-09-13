import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import CuriosityComponent from '../components/Curiosity';

export default class Curiosity extends Component {
  static navigationOptions = {
    title: 'Curiosity',
  };
  render() {
    return (
      <ImageBackground
        source={require('../images/mars.jpeg')}
        style={styles.backgroundImage}>
        <View style={styles.curiosityPage}>
          <View style={styles.curiosityBox}>
            <CuriosityComponent></CuriosityComponent>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  curiosityPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'IBM Plex Sans',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  curiosityBox: {
    height: '100%',
    width: '100%',
  },
});
