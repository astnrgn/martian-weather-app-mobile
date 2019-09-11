import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
const curiositySearchUrl =
  'https://pudding.cool/2017/12/mars-data/marsWeather.json';

export default class CuriosityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curiosityWeatherData: [],
    };
  }
  componentDidMount() {
    axios
      .get(curiositySearchUrl)
      .then(response => {
        this.setState({
          curiosityWeatherData: response.data,
          currentWeather: response.data[0],
        });
        console.log(this.state.curiosityWeatherData);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    let curiosityWeather = this.state.curiosityWeatherData
      .slice(0, 7)
      .map((day, index) => {
        if (index <= 6) {
          day.min_temp = Math.round(1.8 * day.min_temp + 32);
          day.max_temp = Math.round(1.8 * day.max_temp + 32);
          return (
            <View style={styles.curiosityViews} key={index}>
              <Text>{day.sol}</Text>
              <Text>{day.terrestrial_date}</Text>
              <Text>{day.max_temp}°F</Text>
              <Text>{day.min_temp}°F</Text>
            </View>
          );
        }
        return null;
      });
    let currentMax = this.state.curiosityWeatherData
      .slice(0, 7)
      .map((day, index) => {
        if (index == 0) {
          return (
            <View style={styles.curiosityViews} key={index}>
              <Text>{day.max_temp}°F</Text>
            </View>
          );
        }
        return null;
      });
    return (
      <View style={styles.curiosityContainer}>
        <View>{curiosityWeather}</View>
        <View>{currentMax}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  curiosityContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  dataContainer: {
    backgroundColor: 'white',
    height: '60%',
    width: '100%',
  },
  curiosityViews: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
