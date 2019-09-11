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
const inSightSearchUrl =
  'https://api.nasa.gov/insight_weather/?api_key=xM37sJTj9e3rcHJysfB3KnZrZk8aXmJH7BGzTzZd&feedtype=json&ver=1.0';

export default class InSightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inSightWeatherData: [],
    };
  }
  componentDidMount() {
    axios
      .get(inSightSearchUrl)
      .then(response => {
        let sol = response.data.sol_keys;
        let newInsightData = sol.map(solNumber => {
          let formattedData = {
            martianDate: solNumber,
            earthDate: response.data[solNumber].First_UTC,
            season: response.data[solNumber].Season,
            maxTemp: response.data[solNumber].AT.mx,
            minTemp: response.data[solNumber].AT.mn,
          };
          return formattedData;
        });
        this.setState({
          inSightWeatherData: newInsightData,
        });
        console.log(this.state.inSightWeatherData);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    let inSightWeather = this.state.inSightWeatherData.map((day, index) => {
      if (index <= 6) {
        day.min_temp = Math.round(1.8 * day.min_temp + 32);
        day.max_temp = Math.round(1.8 * day.max_temp + 32);
        // startDate = day.terrestrial_date.substring(6, 7);
        // midDate = day.terrestrial_date.substring(7, 8);
        // endDate = day.terrestrial_date.substring(9, 10);
        // day.terrestrial_date =
        //   ' ' + startDate + ' ' + midDate + ' ' + endDate;
        return (
          <View style={styles.inSightViews} key={index}>
            <View style={styles.weatherValueBox}>
              <Text style={styles.weatherValueText}>{day.martianDate}</Text>
            </View>
            <View style={styles.weatherValueBoxEarth}>
              <Text style={styles.weatherValueText}>{day.earthDate}</Text>
            </View>
            <View style={styles.weatherValueBox}>
              <Text style={styles.maxMultipleText}>
                {day.maxTemp}
                {' ' + ' '}
                <Text style={styles.minMultipleText}>{day.minTemp}</Text>
              </Text>
              {/* <Text style={styles.weatherValueText}>{day.min_temp}</Text> */}
            </View>
          </View>
        );
      }
      return null;
    });
    let currentMax = this.state.inSightWeatherData
      .slice(0, 7)
      .map((day, index) => {
        if (index == 0) {
          return (
            <View style={styles.maxView} key={index}>
              <View>
                <Text style={styles.seasonText}>{day.season}</Text>
              </View>
              <View>
                <Text style={styles.maxSingleText}>{day.maxTemp}°F</Text>
              </View>
              <View>
                <Text style={styles.minSingleText}>{day.minTemp}°F</Text>
              </View>
            </View>
          );
        }
        return null;
      });

    return (
      <View style={styles.inSightContainer}>
        <View>{currentMax}</View>
        <View style={styles.currentInformation}>
          <View>
            <Text style={styles.currentLocationText}>Elysium Planitia</Text>
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
          {inSightWeather}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inSightContainer: {
    borderColor: 'gold',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
  },
  currentInformation: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  currentLocationText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    padding: 18,
    letterSpacing: 2,
  },
  inSightViews: {
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
  },
  maxSingleText: {
    fontWeight: 'bold',
    fontSize: 53,
  },
  minSingleText: {
    fontSize: 18,
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
  },
  maxMultipleText: {
    fontWeight: 'bold',
    fontSize: 14,
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
  },
});
