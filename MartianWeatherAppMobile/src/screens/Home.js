import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import HomeComponent from '../components/Home';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <ImageBackground
        source={require('../images/homepage.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.homePage}>
          <View style={styles.centerBox}>
            <HomeComponent></HomeComponent>
            <TouchableOpacity>
              <Text
                style={styles.curiosityContainer}
                onPress={() => this.props.navigation.navigate('Curiosity')}>
                Curiosity Rover
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={styles.insightContainer}
                onPress={() => this.props.navigation.navigate('InSight')}>
                InSight Lander
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  centerBox: {
    borderWidth: 2,
    borderColor: 'red',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  curiosityContainer: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#fbf7f5',
    color: '#fbf7f5',
  },
  insightContainer: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#fbf7f5',
    color: '#fbf7f5',
  },
});
