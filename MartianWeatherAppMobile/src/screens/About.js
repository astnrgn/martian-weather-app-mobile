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
            {/* <TouchableOpacity>
            <Text
              style={styles.homeButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              - Home -
            </Text>
          </TouchableOpacity> */}
            <AboutComponent></AboutComponent>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  aboutPage: {
    // borderColor: 'gold',
    // borderWidth: 3,
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
