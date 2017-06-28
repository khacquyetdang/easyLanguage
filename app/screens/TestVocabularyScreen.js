

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


  constructor(props) {
    super(props)
    this.state = {
      answerClicked : false,
      currentAnswerMatched: false,
      currentCorrectAnswer : 2,
      currentQuestion : 0

    }
  }


  goToNextTest()
  {
    if (this.state.currentAnswerMatched)
    {
      this.setState({answerClicked: false, currentAnswerMatched: false});
      var questionIndex =  this.state.currentQuestion + 1;
      this.setState({currentQuestion: questionIndex});
    }
  }

  onImageClick(answer)
  {
    this.setState({answerClicked: true})
    if (answer === this.state.currentCorrectAnswer)
    {
      this.setState({currentAnswerMatched: true})
      // @TODO set Button go to next question to visible with the
      // text go to next
      // @TODO when click to the button
      this._renderNext();
    }
    else {
      this.setState({currentAnswerMatched: false})
      // @TODO set Button go to next question to visible with the
      // text go to next
      // @TODO when click to the button
      this._renderNext();
      Alert.alert('Wrong answer, try again!');
    }

  }

  _renderNext()
  {
    if (this.state.currentAnswerMatched)
    {
      return (
        <View style={styles.rowContainer}>

          <TouchableHighlight style={styles.buttonCheck}
          onPress={() => { this.goToNextTest()}}>

              <Text>Correct answer, go next</Text>
          </TouchableHighlight>

        </View>
      )
    }
    else {
      return null;
    }
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
                    onPress={() => this.onImageClick(1)}>
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
                  onPress={() => this.onImageClick(2)}>
                  <Image
                    style={styles.imageAnswerStyle}
                    source={require('../../image/dog.jpg')}
                    />
                  </TouchableHighlight>
                  </View>

                  <View style={styles.column}>
                  <TouchableHighlight
                  onPress={() => this.onImageClick(3)}>
                  <Image
                    style={styles.imageAnswerStyle}
                    source={require('../../image/oiseau.jpg')}
                  />
                  </TouchableHighlight>
                  </View>

                </View>

              { this._renderNext() }
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
    flex: 1,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 10,
    borderWidth:1,
  }
});


module.exports = TestVocabularyScreen;
