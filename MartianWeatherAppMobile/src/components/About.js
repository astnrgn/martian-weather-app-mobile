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
      <FadeInView style={styles.flexContent}>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutDescription}>
            Fourth Rock Weather is a martian weather application using open
            source data provided by NASA
          </Text>
        </View>
        <View>
          <Text style={styles.keyTitle}>Key</Text>
          <View style={styles.borderz}>
            <View style={styles.titlez}>
              <Text style={styles.keys2}>
                Sol:{' '}
                <Text style={styles.keys3}>
                  Number of Martian Days since landing
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.borderz}>
            <View style={styles.titlez}>
              <Text style={styles.keys2}>
                Earth:{' '}
                <Text style={styles.keys3}>Corresponding Date on Earth</Text>
              </Text>
            </View>
          </View>
          <View style={styles.borderz}>
            <View style={styles.titlez}>
              <Text style={styles.keys2}>
                H / F:{' '}
                <Text style={styles.keys3}>
                  High and Low temperatures in Fahrenheit
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.learnMoreContainer}>
          <Text style={styles.learnMoreTitle}>Learn More About:</Text>
          <Text
            style={styles.learnMoreLinks}
            onPress={() => Linking.openURL('https://mars.jpl.nasa.gov/msl/')}>
            - Curiosity -
          </Text>
          <Text
            style={styles.learnMoreLinks}
            onPress={() =>
              Linking.openURL('https://mars.nasa.gov/insight/weather/')
            }>
            - InSight -
          </Text>
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  flexContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    // borderWidth: 2,
    borderColor: 'red',
  },
  borderz: {
    // borderWidth: 2,
    borderColor: '#fbf7f5',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  keys2: {
    color: '#fbf7f5',
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'left',
  },
  keys3: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 18.5,
    textAlign: 'left',
  },
  titlez: {
    // borderWidth: 2,
    borderColor: '#fbf7f5',
  },
  descriptzz: {
    // borderWidth: 2,
    borderColor: '#fbf7f5',
  },
  aboutContainer: {
    // borderWidth: 2,
    borderColor: '#fbf7f5',
    padding: '5%',
  },
  aboutDescription: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
  },
  keyTitle: {
    color: '#fbf7f5',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
  },
  learnMoreContainer: {
    // borderWidth: 2,
    borderColor: '#fbf7f5',
    padding: '5%',
  },
  learnMoreTitle: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
  learnMoreLinks: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '5%',
  },
});
