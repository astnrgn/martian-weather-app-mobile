import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import AboutComponent from '../components/About';

export default class About extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <ImageBackground
        source={require('../images/mars.jpeg')}
        style={styles.backgroundImage}>
        <View style={styles.aboutPage}>
          <View style={styles.aboutBox}>
            <AboutComponent></AboutComponent>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  aboutPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'IBM Plex Sans',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
