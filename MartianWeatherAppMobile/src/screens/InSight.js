import React, {Component} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Button,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import InSightComponent from '../components/InSight';

export default class InSight extends Component {
  static navigationOptions = {
    title: 'InSight',
  };
  render() {
    return (
      <ImageBackground
        source={require('../images/spaceLoop.gif')}
        style={styles.backgroundImage}>
        <View style={styles.inSightPage}>
          <View style={styles.inSightBox}>
            {/* <TouchableOpacity>
            <Text
              style={styles.homeButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              - Home -
            </Text>
          </TouchableOpacity> */}
            <InSightComponent></InSightComponent>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  inSightPage: {
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
  inSightBox: {
    borderColor: 'red',
    borderWidth: 1,
    height: '100%',
    width: '100%',
  },
});
