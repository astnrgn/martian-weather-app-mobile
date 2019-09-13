import React, {Component, useState} from 'react';
import {StyleSheet, Animated, Text, View, Linking} from 'react-native';

const FadeInView = props => {
  const [fadeAdmin] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(fadeAdmin, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAdmin,
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
          <View style={styles.centerKeys}>
            <View>
              <Text style={styles.keyTitles}>
                Sol:{' '}
                <Text style={styles.keyDescriptions}>
                  Number of Martian Days since landing
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.centerKeys}>
            <View>
              <Text style={styles.keyTitles}>
                Earth:{' '}
                <Text style={styles.keyDescriptions}>
                  Corresponding Date on Earth
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.centerKeys}>
            <View>
              <Text style={styles.keyTitles}>
                H / F:{' '}
                <Text style={styles.keyDescriptions}>
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
  },
  centerKeys: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  keyTitle: {
    color: '#fbf7f5',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
  },
  keyTitles: {
    color: '#fbf7f5',
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'left',
  },
  keyDescriptions: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 18.5,
    textAlign: 'left',
  },
  aboutContainer: {
    padding: '5%',
  },
  aboutDescription: {
    color: '#fbf7f5',
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
  },
  learnMoreContainer: {
    padding: '5%',
  },
  learnMoreTitle: {
    color: '#fbf7f5',
    fontWeight: 'bold',
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
