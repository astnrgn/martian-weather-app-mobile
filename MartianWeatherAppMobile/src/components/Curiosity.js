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
const curiositySearchUrl =
  'https://pudding.cool/2017/12/mars-data/marsWeather.json';

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
          endDate = day.terrestrial_date.substring(8, 10);
          day.terrestrial_date = startDate + midDate + endDate;
          return (
            <View style={styles.flexToColumn} key={index}>
              <View style={styles.flexToRow}>
                <View style={styles.informationViews}>
                  <Text style={styles.weatherValueText}>{day.sol}</Text>
                </View>
                <View style={styles.informationViews}>
                  <Text style={styles.weatherValueText}>
                    {day.terrestrial_date}
                  </Text>
                </View>
                <View style={styles.informationViewTemperature}>
                  <Text style={styles.maxMultipleText}>
                    {day.max_temp}
                    {'  '}
                    <Text style={styles.minMultipleText}>{day.min_temp}</Text>
                  </Text>
                </View>
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
      <FadeInView style={styles.curiosityContainer}>
        <View>{currentMax}</View>
        <View style={styles.currentInformation}>
          <View>
            <Text style={styles.currentLocationText}>Gale Crater</Text>
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
            {curiosityWeather}
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
  curiosityContainer: {
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
