

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableOpacity
} from 'react-native';

class PeopleShowScreen extends React.Component {
  static navigationOptions = {
    title: 'Person Detail',
  };
  render() {
     const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Person detail</Text>
        <Text>{params.person.firstName}</Text>
        <Text>{params.person.lastName}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});


module.exports = PeopleShowScreen;
