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
          <View style={styles.flexy}>
            <View style={styles.borderz}>
              <Text style={styles.keys2}>Sol: </Text>
              <Text style={styles.keys3}>
                Number of Martian Days since landing
              </Text>
            </View>
            <View style={styles.borderz}>
              <View>
                <Text style={styles.keys2}>Earth: </Text>
              </View>
              <View>
                <Text style={styles.keys3}>Corresponding Date on Earth</Text>
              </View>
            </View>
            <View style={styles.borderz}>
              <Text style={styles.keys2}>H / F: </Text>
              <Text style={styles.keys3}>
                High and Low temperatures in Farenheight
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
    borderWidth: 2,
    borderColor: 'red',
  },
  flexy: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  borderz: {
    borderWidth: 2,
    borderColor: '#fbf7f5',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 10,
  },
  keys2: {
    color: '#fbf7f5',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
  },
  keys3: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'left',
  },
  aboutContainer: {
    borderWidth: 2,
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
    fontWeight: '600',
    fontSize: 28,
    textAlign: 'center',
  },
  learnMoreContainer: {
    borderWidth: 2,
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
