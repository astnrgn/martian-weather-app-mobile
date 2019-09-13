import React, {Component, useState} from 'react';
import {StyleSheet, Animated, Text, View, Linking} from 'react-native';

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

export default class HomeComponent extends Component {
  render() {
    return (
      <FadeInView>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutDescription}>
            Fourth Rock Weather is a martian weather application using open
            source data provided by NASA
          </Text>
        </View>
        <View style={styles.flexToColumn}>
          <View style={styles.keyContainer}>
            <Text style={styles.keyTitle}>Key</Text>
            <View>
              <Text>Sol: Number of Martian Days since landing on Mars</Text>
              <Text>Earth: Corresponding date on Earth</Text>
              <Text>
                H / F: High and Low temperatures for the given Sol in Fahrenheit
              </Text>
            </View>
          </View>
          <View>
            <Text>Learn More About:</Text>
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('https://mars.jpl.nasa.gov/msl/')}>
              Curiosity
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL('https://mars.nasa.gov/insight/weather/')
              }>
              InSight
            </Text>
          </View>
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  flexToColumn: {
    flex: 1,
    justifyContent: 'space-evenly',
    fontFamily: 'IBM Plex Sans',
  },
  aboutContainer: {
    borderWidth: 2,
    borderColor: '#fbf7f5',
    padding: '5%',
  },
  aboutDescription: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center',
  },
  keyContainer: {
    borderWidth: 2,
    borderColor: '#fbf7f5',
    padding: '5%',
  },
  keyTitle: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center',
  },
});
