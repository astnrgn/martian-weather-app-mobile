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
          startDate = day.terrestrial_date.substring(6, 7);
          midDate = day.terrestrial_date.substring(7, 8);
          endDate = day.terrestrial_date.substring(9, 10);
          day.terrestrial_date =
            ' ' + startDate + ' ' + midDate + ' ' + endDate;
          return (
            <View style={styles.curiosityViews} key={index}>
              <View style={styles.weatherValueBox}>
                <Text style={styles.weatherValueText}>{day.sol}</Text>
              </View>
              <View style={styles.weatherValueBoxEarth}>
                <Text style={styles.weatherValueText}>
                  {day.terrestrial_date}
                </Text>
              </View>
              <View style={styles.weatherValueBox}>
                <Text style={styles.maxMultipleText}>
                  {day.max_temp}
                  {' ' + ' '}
                  <Text style={styles.minMultipleText}>{day.min_temp}</Text>
                </Text>
                {/* <Text style={styles.weatherValueText}>{day.min_temp}</Text> */}
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
                <Text style={styles.minSingleText}>{day.min_temp}°F</Text>
              </View>
            </View>
          );
        }
        return null;
      });

    return (
      <View style={styles.curiosityContainer}>
        <View>{currentMax}</View>
        <View style={styles.currentInformation}>
          <View>
            <Text style={styles.currentLocationText}>Gale Crater</Text>
          </View>
          <View style={styles.weatherKeyView}>
            <View style={styles.keyValueBox}>
              <Text style={styles.keyValueText}> Sol</Text>
            </View>
            <View style={styles.keyValueBox}>
              <Text style={styles.keyValueText}> Earth</Text>
            </View>
            <View style={styles.keyValueBox}>
              <Text style={styles.keyValueText}>H // L </Text>
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
    // borderColor: 'gold',
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
  },
  currentInformation: {
    borderColor: 'black',
    // backgroundColor: 'white',
    borderWidth: 1,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
  currentLocationText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    padding: 18,
    letterSpacing: 2,
    color: '#fbf7f5',
  },
  curiosityViews: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 2,
  },
  maxView: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
  },
  seasonText: {
    // textDecorationLine: 'underline',
    fontSize: 16,
    color: '#fbf7f5',
  },
  maxSingleText: {
    fontWeight: 'bold',
    fontSize: 53,
    color: '#fbf7f5',
  },
  minSingleText: {
    fontSize: 18,
    color: '#fbf7f5',
  },
  weatherKeyView: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherValueBox: {
    borderColor: 'black',
    borderWidth: 1,
  },
  weatherValueBoxEarth: {
    borderColor: 'black',
    borderWidth: 1,
  },
  weatherValueText: {
    fontSize: 17,
    color: '#fbf7f5',
  },
  maxMultipleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fbf7f5',
  },
  minMultipleText: {
    fontWeight: 'normal',
  },
  keyValueBox: {
    borderColor: 'black',
    borderWidth: 1,
  },
  keyValueText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbf7f5',
  },
});
