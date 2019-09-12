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
      <ImageBackground
        source={require('../images/rotatingMars.gif')}
        style={styles.backgroundImage}>
        <View style={styles.curiosityPage}>
          <View style={styles.curiosityBox}>
            {/* <TouchableOpacity>
            <Text
              style={styles.homeButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              - Home -
            </Text>
          </TouchableOpacity> */}
            <CuriosityComponent></CuriosityComponent>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  curiosityPage: {
    borderColor: 'black',
    borderWidth: 3,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'IBM Plex Sans',
    backgroundColor: 'cyan',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  homeButton: {
    borderColor: 'green',
    borderWidth: 3,
  },
  curiosityBox: {
    borderColor: 'red',
    borderWidth: 1,
    height: '100%',
    width: '100%',
  },
});
