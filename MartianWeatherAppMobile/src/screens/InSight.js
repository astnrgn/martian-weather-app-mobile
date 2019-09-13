import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import InSightComponent from '../components/InSight';

export default class InSight extends Component {
  static navigationOptions = {
    title: 'InSight',
  };
  render() {
    return (
      <ImageBackground
        source={require('../images/mars.jpeg')}
        style={styles.backgroundImage}>
        <View style={styles.inSightPage}>
          <View style={styles.inSightBox}>
            <InSightComponent></InSightComponent>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  inSightPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'IBM Plex Sans',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  inSightBox: {
    height: '100%',
    width: '100%',
  },
});
