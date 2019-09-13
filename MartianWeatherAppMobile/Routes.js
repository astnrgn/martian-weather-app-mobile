import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import Curiosity from './src/screens/Curiosity';
import InSight from './src/screens/InSight';
import About from './src/screens/About';
const Project = createStackNavigator({
  Home: {
    screen: Home,
  },
  Curiosity: {
    screen: Curiosity,
  },
  InSight: {
    screen: InSight,
  },
  About: {
    screen: About,
  },
});
export default createAppContainer(Project);
