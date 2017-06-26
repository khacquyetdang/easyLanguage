/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import _ from 'lodash'
import HomeScreen from "./app/screens/HomeScreen"
import TestVocabularyScreen from "./app/screens/TestVocabularyScreen"


const easyLanguage = StackNavigator({
  //Home: { screen: HomeScreen },
  TestVocabulary: { screen: TestVocabularyScreen }
});

const styles = StyleSheet.create({
  navigatorStyles: {
  }
});

AppRegistry.registerComponent('easyLanguage', () => easyLanguage);
