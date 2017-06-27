

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
  TouchableHighlight,
  Image
} from 'react-native';

class TestVocabularyScreen extends React.Component {
  static navigationOptions = {
    title: 'Test vocabulaire',
  };

  currentAnswer = 0;
  currentQuestion = 0;

  constructor() {
    this.state = {
      answerClicked : false,
      currentAnswerMatched: false
    }
  }


  goToNextTest()
  {
    if (currentAnswerMatched)
    {
      this.setState({answerClicked: false});
      this.setState({currentAnswerMatched: false});
      currentQuestion = currentQuestion + 1;
    }
  }

  onImageClick(answer)
  {
    this.setState({answerClicked: true})
    if (answer === currentAnswer)
    {
      this.setState({currentAnswerMatched: true})
      // @TODO set Button go to next question to visible with the
      // text go to next
      // @TODO when click to the button
    }
    else {
      // @TODO set Button go to next question to visible with the
      // text wrong answer, try again
    }
    Alert.alert('You tapped the image! ' + answer);

  }

  render() {
     const { params } = this.props.navigation.state;
    return (
              <View style={styles.columnContainer}>

              <View style={styles.question}>
                <Text style={styles.textquestion}>
                  {'Choisir l\'image correspondant à un oiseau?'}
                </Text>
                </View>


              <View style={styles.rowContainer}>
                  <View style={styles.column}>
                  <TouchableHighlight
                  onPress={() => this.onImageClick(0)}>
                    <Image
                      style={styles.imageAnswerStyle}
                      source={require('../../image/burger.jpg')}
                    />
                    </TouchableHighlight>
                  </View>

                  <View style={styles.column}>
                  <TouchableHighlight
                  onPress={() => { Alert.alert('You tapped the image!')}}>
                  <Image
                    style={styles.imageAnswerStyle}
                    source={require('../../image/car.jpg')}
                  />
                  </TouchableHighlight>
                  </View>

                </View>

                <View style={styles.rowContainer}>
                  <View style={styles.column}>
                  <TouchableHighlight
                  onPress={() => { Alert.alert('You tapped the image!')}}>
                  <Image
                    style={styles.imageAnswerStyle}
                    source={require('../../image/dog.jpg')}
                    />
                  </TouchableHighlight>
                  </View>

                  <View style={styles.column}>
                  <TouchableHighlight
                  onPress={() => { Alert.alert('You tapped the image!')}}>
                  <Image
                    style={styles.imageAnswerStyle}
                    source={require('../../image/oiseau.jpg')}
                  />
                  </TouchableHighlight>
                  </View>

                </View>

                <View style={styles.rowContainer}>

                  <TouchableHighlight style={styles.buttonCheck}
                  onPress={() => { Alert.alert('You tapped the buttobbn!')}}>

                      <Text>Check</Text>
                  </TouchableHighlight>

                </View>

              </View>
    );
  }
}

 var width = Dimensions.get('window').width; //full width
 var columnWidth = width / 2 - 30;
 var rowHeight = width / 2 - 10;
 var imageSize = width / 3;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'violet',
  },

  question : {
    marginTop:10,
    marginLeft: 20,
    marginRight: 20,
  },
  textquestion : {
    fontWeight : 'bold',
    fontSize: 25
  },

  columnContainer: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  rowContainer: {
    flexDirection: 'row',
    height: rowHeight,
    margin: 5
      },

  column: {
    margin: 10,
    flex:1,
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2
  },

  imageAnswerStyle: {
    margin: 2,
    width: imageSize,
    height: imageSize
  },

  buttonCheck: {
    borderColor:'yellow',
    flex: 1,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 10,
    borderWidth:2,
  }
});


module.exports = TestVocabularyScreen;
