import React, {Component, useState} from 'react';
import {StyleSheet, Animated, Text, View} from 'react-native';

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
      <FadeInView style={styles.flexToColumn}>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutDescription}>
            Fourth Rock Weather is a martian weather application using open
            source data provided by NASA
          </Text>
        </View>
        <View style={styles.keyContainer}>
          <Text style={styles.keyTitle}>Key</Text>
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  flexToColumn: {
    display: "flex"
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'IBM Plex Sans',
  },
  aboutContainer: {
    flexDirection: 'row',
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
    flexDirection: 'row',
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
