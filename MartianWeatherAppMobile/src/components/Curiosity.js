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
          day.terrestrial_date = day.terrestrial_date.substring(5, 10);
          return (
            <View style={styles.curiosityViews} key={index}>
              <View style={styles.weatherValueBox}>
                <Text>{day.sol}</Text>
              </View>
              <View style={styles.weatherValueBox}>
                <Text style={styles.terrestrialText}>
                  {day.terrestrial_date}
                </Text>
              </View>
              <View style={styles.weatherValueBox}>
                <Text style={styles.maxMultipleText}>{day.max_temp}°F</Text>
                <Text>{day.min_temp}°F</Text>
              </View>
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
            <View style={styles.maxView} key={index}>
              <View>
                <Text style={styles.seasonText}>{day.season}</Text>
              </View>
              <View>
                <Text style={styles.maxSingleText}>{day.max_temp}°F</Text>
              </View>
              <View>
                <Text>{day.min_temp}°F</Text>
              </View>
            </View>
          );
        }
        return null;
      });

    return (
      <View style={styles.curiosityContainer}>
        <View>{currentMax}</View>
        <View style={styles.currentLocation}>
          <View>
            <Text style={styles.currentLocationText}>Gale Crater</Text>
          </View>
          <View style={styles.weatherKeyView}>
            <View style={styles.keyValueBox}>
              <Text style={styles.currentEarthDate}>Sol</Text>
            </View>
            <View style={styles.keyValueBox}>
              <Text style={styles.currentEarthDate}>Earth</Text>
            </View>
            <View style={styles.keyValueBox}>
              <Text style={styles.currentEarthDate}>H / L</Text>
            </View>
          </View>
          {curiosityWeather}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  curiosityContainer: {
    borderColor: 'gold',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
  },
  currentLocation: {
    borderColor: 'black',
    borderWidth: 1,
  },
  currentLocationText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  curiosityViews: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  maxView: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  maxMultipleText: {
    fontWeight: 'bold',
  },
  maxSingleText: {
    fontWeight: 'bold',
  },
  seasonText: {
    textDecorationLine: 'underline',
  },
  weatherKeyView: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  currentEarthDate: {
    textAlign: 'center',
    // fontSize: 18,
    // letterSpacing: 1,
  },
  weatherValueBox: {
    borderColor: 'black',
    borderWidth: 1,
  },
  keyValueBox: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
