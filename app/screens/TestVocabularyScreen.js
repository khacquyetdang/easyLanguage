

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

animalTest = [
  {
    "name":"singe",
    "correctAnwser":2,
    "image_question":[  require("../../image/animal/coq.jpg"),
    require('../../image/animal/elephant.jpg'),
    require('../../image/animal/singe.jpg'),
    require('../../image/animal/canard.jpg')]
  },
  {
    "name":"lion",
    "correctAnwser":3,
    "image_question":[
      require('../../image/animal/elephant.jpg'),
      require('../../image/animal/hippopotamus.jpg'),
      require('../../image/animal/mouton.jpg'),
      require('../../image/animal/lion.jpg')]
    },

  {
    "name":"dog",
    "correctAnwser":1,
    "image_question":[
      require('../../image/animal/chat.jpg'),
      require('../../image/animal/mouton.jpg'),
      require('../../image/animal/lion.jpg'),
      require('../../image/animal/dog.jpg')]
  },

  {
    "name":"chat",
    "correctAnwser":1,
    "image_question":[
      require('../../image/animal/cheval.jpg'),
      require('../../image/animal/chat.jpg'),
      require('../../image/animal/elephant.jpg'),
      require('../../image/animal/lion.jpg')]
  },
  {
    "name":"cheval",
    "correctAnwser":3,
    "image_question":[
      require('../../image/animal/coq.jpg'),
      require('../../image/animal/lion.jpg'),
      require('../../image/animal/porc.jpg'),
      require('../../image/animal/cheval.jpg')
    ]
  },

  {
    "name":"elephant",
    "correctAnwser":2,
    "image_question":[
      require('../../image/animal/dog.jpg'),
      require('../../image/animal/vache.jpg'),
      require('../../image/animal/elephant.jpg'),
      require('../../image/animal/porc.jpg')
    ]
  },

  {
    "name":"coq",
    "correctAnwser":1,
    "image_question":[
      require('../../image/animal/coq.jpg'),
      require('../../image/animal/singe.jpg'),
      require('../../image/animal/vache.jpg'),
      require('../../image/animal/canard.jpg')
      ]
  }
]

class TestVocabularyScreen extends React.Component {
  static navigationOptions = {
    title: 'Test vocabulaire',
  };


  constructor(props) {
    super(props)
    this.state = {
      answerClicked : false,
      currentAnswerMatched: false,
      currentCorrectAnswer : 3,
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
    }

  }

  _renderNext()
  {
    console.log("render next")
    if (this.state.answerClicked)
    {

      if (this.state.currentAnswerMatched === true)
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
        return (
          <View style={styles.rowContainer}>

            <TouchableHighlight style={styles.buttonWrongAnswer}
              onPress={() => {}}>

              <Text style={styles.textWrongAnswer}>Wrong answer, try again</Text>
            </TouchableHighlight>
          </View>
        )
      }
    }
    return <View></View>;
    }
    render() {
      const { params } = this.props.navigation.state;
      const image1 = animalTest[this.state.currentQuestion].image_question[0];
      const image2 = animalTest[this.state.currentQuestion].image_question[1];
      const image3 = animalTest[this.state.currentQuestion].image_question[2];
      const image4 = animalTest[this.state.currentQuestion].image_question[3];
      return (
        <View style={styles.columnContainer}>

          <View style={styles.question}>
            <Text style={styles.textquestion}>
              {'Choisir l\'image correspondant à ' + animalTest[this.state.currentQuestion].name}
            </Text>
          </View>


          <View style={styles.rowContainer}>
            <View style={styles.column}>
              <TouchableHighlight
                onPress={() => this.onImageClick(0)}>
                <Image
                  style={styles.imageAnswerStyle}
                  source={image1}
                  />
              </TouchableHighlight>
            </View>

            <View style={styles.column}>
              <TouchableHighlight
                onPress={() => this.onImageClick(1)}>
                <Image
                  style={styles.imageAnswerStyle}
                  source={image2}
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
                  source={image3}
                  />
              </TouchableHighlight>
            </View>

            <View style={styles.column}>
              <TouchableHighlight
                onPress={() => this.onImageClick(3)}>
                <Image
                  style={styles.imageAnswerStyle}
                  source={image4}
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
    },

    buttonWrongAnswer: {
      flex: 1,
      backgroundColor: 'red',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      margin: 10,
      borderWidth:1,
    },

    textWrongAnswer: {
      color: 'white'
    }
  });


  module.exports = TestVocabularyScreen;
