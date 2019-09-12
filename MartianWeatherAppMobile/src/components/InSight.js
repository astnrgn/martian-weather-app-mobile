import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Button,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
const inSightSearchUrl =
  'https://api.nasa.gov/insight_weather/?api_key=xM37sJTj9e3rcHJysfB3KnZrZk8aXmJH7BGzTzZd&feedtype=json&ver=1.0';

const FadeInView = props => {
  const [fadeAdmin] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAdmin, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
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
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    let inSightWeather = this.state.inSightWeatherData.map((day, index) => {
      if (index <= 6) {
        day.minTemp = Math.round(1.8 * day.minTemp + 32);
        day.maxTemp = Math.round(1.8 * day.maxTemp + 32);
        startDate = day.earthDate.substring(6, 7);
        midDate = day.earthDate.substring(7, 8);
        endDate = day.earthDate.substring(8, 10);
        day.earthDate = startDate + midDate + endDate;
        return (
          <View style={styles.flexToColumn} key={index}>
            <View style={styles.flexToRow}>
              <View style={styles.informationViews}>
                <Text style={styles.weatherValueText}>{day.martianDate}</Text>
              </View>
              <View style={styles.informationViews}>
                <Text style={styles.weatherValueText}>{day.earthDate}</Text>
              </View>
              <View style={styles.informationViewTemperature}>
                <Text style={styles.maxMultipleText}>
                  {day.maxTemp}
                  {'  '}
                  <Text style={styles.minMultipleText}>{day.minTemp}</Text>
                </Text>
              </View>
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
              <View style={styles.weatherValueBox}>
                <Text style={styles.seasonText}>{day.season}</Text>
              </View>
              <View style={styles.weatherValueBox}>
                <Text style={styles.maxSingleText}>{day.maxTemp}°F</Text>
              </View>
              <View style={styles.weatherValueBox}>
                <Text style={styles.minSingleText}>{day.minTemp}°F</Text>
              </View>
            </View>
          );
        }
        return null;
      });

    return (
      <FadeInView style={styles.inSightContainer}>
        <View>{currentMax}</View>
        <View style={styles.currentInformation}>
          <View>
            <Text style={styles.currentLocationText}>Elysium Planitia</Text>
          </View>
          <View style={styles.flexToColumn}>
            <View style={styles.flexToRow}>
              <View style={styles.keyValuesView}>
                <Text style={styles.keyValueText}>Sol</Text>
              </View>
              <View style={styles.keyValuesView}>
                <Text style={styles.keyValueText}>Earth</Text>
              </View>
              <View style={styles.keyValuesView}>
                <Text style={styles.keyValueText}>H / L</Text>
              </View>
            </View>
            {inSightWeather}
          </View>
        </View>
      </FadeInView>
    );
  }
}
const styles = StyleSheet.create({
  flexToColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexToRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  informationViews: {
    height: 26,
    width: 75,
  },
  informationViewTemperature: {
    height: 26,
    width: 77,
  },
  keyValuesView: {
    height: 32,
    width: 77,
  },
  inSightContainer: {
    // borderColor: 'white',
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
  },
  currentInformation: {
    // borderColor: 'white',
    // borderWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  currentLocationText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 27,
    padding: 18,
    letterSpacing: 2,
    color: '#fbf7f5',
  },
  inSightViews: {
    // borderColor: 'white',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginVertical: 2,
  },
  maxView: {
    // borderColor: 'white',
    // borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
  },
  seasonText: {
    // textDecorationLine: 'underline',
    fontSize: 16,
    textTransform: 'capitalize',
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
    // borderColor: 'white',
    // borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherValueBox: {
    // borderColor: 'white',
    // borderWidth: 1,
  },
  weatherValueBoxEarth: {
    // borderColor: 'white',
    // borderWidth: 1,
  },
  weatherValueText: {
    // borderColor: 'white',
    // borderWidth: 1,
    fontSize: 17,
    color: '#fbf7f5',
    textAlign: 'center',
  },
  maxMultipleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fbf7f5',
    letterSpacing: 2,
    textAlign: 'center',
  },
  minMultipleText: {
    fontWeight: 'normal',
    fontSize: 13,
    color: '#fbf7f5',
    textAlign: 'center',
  },
  keyValueBox: {
    // borderColor: 'white',
    // borderWidth: 1,
  },
  keyValueText: {
    // borderColor: 'white',
    // borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbf7f5',
    letterSpacing: 2,
  },
});
