import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
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
            <View>
              <View style={styles.curiosityContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.curiosityContents}
                    onPress={() => this.props.navigation.navigate('Curiosity')}>
                    Curiosity Rover
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.insightContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.insightContents}
                    onPress={() => this.props.navigation.navigate('InSight')}>
                    InSight Lander
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.aboutContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.aboutContents}
                    onPress={() => this.props.navigation.navigate('About')}>
                    [ About ]
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
    fontFamily: 'IBM Plex Sans',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  centerBox: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  curiosityContainer: {
    borderWidth: 1,
    borderColor: '#fbf7f5',
    marginTop: '50%',
    padding: '1%',
  },
  curiosityContents: {
    fontSize: 33,
    color: '#fbf7f5',
    textAlign: 'center',
  },
  insightContainer: {
    borderWidth: 1,
    borderColor: '#fbf7f5',
    marginTop: '15%',
    padding: '1%',
  },
  insightContents: {
    fontSize: 33,
    color: '#fbf7f5',
    textAlign: 'center',
  },
  aboutContainer: {
    marginTop: '5%',
    marginHorizontal: '25%',
  },
  aboutContents: {
    color: '#fbf7f5',
    textAlign: 'center',
    fontSize: 15,
  },
});
