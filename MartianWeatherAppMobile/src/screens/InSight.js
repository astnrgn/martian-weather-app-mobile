import React, {Component, useState, useEffect} from 'react';
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

const FadeInView = props => {
  const [fadeAdmin] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAdmin, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAdmin, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default class InSight extends React.Component {
  static navigationOptions = {
    title: 'InSight',
  };
  render() {
    return (
      <ImageBackground
        source={require('../images/spaceLoop.gif')}
        style={styles.backgroundImage}>
        <View style={styles.inSightPage}>
          <FadeInView style={styles.inSightBox}>
            {/* <TouchableOpacity>
            <Text
              style={styles.homeButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              - Home -
            </Text>
          </TouchableOpacity> */}
            <InSightComponent></InSightComponent>
          </FadeInView>
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
