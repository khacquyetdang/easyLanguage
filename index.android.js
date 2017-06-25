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
import PeopleIndexScreen from "./app/screens/PeopleIndexScreen"
import PeopleShowScreen from "./app/screens/PeopleShowScreen"


const easyLanguage = StackNavigator({
  PeopleIndex: { screen: PeopleIndexScreen },
  PeopleShow: { screen: PeopleShowScreen }
});

const styles = StyleSheet.create({
  navigatorStyles: {
  }
});

AppRegistry.registerComponent('easyLanguage', () => easyLanguage);
