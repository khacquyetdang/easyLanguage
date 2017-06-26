

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class TestVocabularyScreen extends React.Component {
  static navigationOptions = {
    title: 'Person Detail',
  };
  render() {
     const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Person detail</Text>

        <View style={styles.columnContainer}>

          <View style={styles.rowContainer}>
            <View style={styles.column}>
            </View>

            <View style={styles.column}>
            </View>

          </View>

          <View style={styles.rowContainer}>
            <View style={styles.column}>
            </View>

            <View style={styles.column}>
            </View>

          </View>

          <View style={styles.rowContainer}>

            <TouchableHighlight style={styles.buttonCheck}
            onPress={() => { Alert.alert('You tapped the button!')}}>

                <Text>Check</Text>
            </TouchableHighlight>

          </View>

        </View>
      </View>
    );
  }
}

 var width = Dimensions.get('window').width; //full width
 var columnWidth = width / 2 - 30;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  columnContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'black',
    flexWrap: 'wrap'
  },

  column: {
    borderColor:'blue',
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
    margin: 10,
    width: columnWidth,
    height: columnWidth,
    borderWidth:2,
  },

  buttonCheck: {
    borderColor:'blue',
    flex: 1,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 10,
    borderWidth:2,
  },

  column2: {
    borderColor:'red',
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
    margin: 10,
    width: columnWidth,
    height: columnWidth,
    borderWidth:2,
  }
});


module.exports = TestVocabularyScreen;
