import React, { Component } from 'react';
import AnswerBox from '../components/AnswerBox.js';

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
    "name_vn":"\"Con khỉ\"",
    "correctAnwser":2,
    "image_question": [ require("../../image/animal/coq.jpg"),
    require('../../image/animal/elephant.jpg'),
    require('../../image/animal/singe.jpg'),
    require('../../image/animal/canard.jpg')]
  },
  {
    "name":"lion",
    "name_vn" : "\"Con hổ\"",
    "correctAnwser":3,
    "image_question":[
      require('../../image/animal/elephant.jpg'),
      require('../../image/animal/hippopotamus.jpg'),
      require('../../image/animal/mouton.jpg'),
      require('../../image/animal/lion.jpg')]
    },

  {
    "name":"dog",
    "name_vn":"\"Con chó\"",
    "correctAnwser":3,
    "image_question":[
      require('../../image/animal/chat.jpg'),
      require('../../image/animal/mouton.jpg'),
      require('../../image/animal/lion.jpg'),
      require('../../image/animal/dog.jpg')]
  },

  {
    "name":"chat",
    "name_vn":"\"Con mèo\"",
    "correctAnwser":1,
    "image_question":[
      require('../../image/animal/cheval.jpg'),
      require('../../image/animal/chat.jpg'),
      require('../../image/animal/elephant.jpg'),
      require('../../image/animal/lion.jpg')]
  },
  {
    "name":"cheval",
    "name_vn":"\"Con ngựa\"",
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
    "name_vn":"\"Con voi\"",
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
    "name_vn":"\"Con gà trống\"",
    "correctAnwser":0,
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
      answerId: -1,
      currentAnswerMatched: false,
      currentCorrectAnswer : 3,
      currentQuestion : 0
    };

    this.answerClicked = this.answerClicked.bind(this);

  }


  goToNextTest()
  {
    if (this.state.currentAnswerMatched)
    {
      if (this.state.currentQuestion < (animalTest.length - 1))
      {
        this.setState({answerClicked: false, currentAnswerMatched: false});
        var questionIndex =  this.state.currentQuestion + 1;
        this.setState({currentQuestion: questionIndex, answerId: -1,});
      }
      else {

      }
    }
  }

  answerClicked(answer)
  {
    var currentQuestion = animalTest[this.state.currentQuestion];
    this.setState({answerClicked: true, answerId:answer})
    if (answer === currentQuestion.correctAnwser)
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
    if (this.state.answerClicked)
    {

      if (this.state.currentAnswerMatched === true)
      {
        return (
          <View style={styles.rowContainer}>

            <TouchableHighlight style={styles.buttonCheck}
              onPress={() => { this.goToNextTest()}}>

              <Text>Bonne réponse, continuer</Text>
            </TouchableHighlight>

          </View>
        )
      }
      else {
        return (
          <View style={styles.rowContainer}>

            <TouchableHighlight style={styles.buttonWrongAnswer}
              onPress={() => {}}>

              <Text style={styles.textWrongAnswer}>Essayer à nouveau</Text>
            </TouchableHighlight>
          </View>
        )
      }
    }
    return <View></View>;
    }
    render() {
      //const { params } = this.props.navigation.state;
      const image1 = animalTest[this.state.currentQuestion].image_question[0];
      const image2 = animalTest[this.state.currentQuestion].image_question[1];
      const image3 = animalTest[this.state.currentQuestion].image_question[2];
      const image4 = animalTest[this.state.currentQuestion].image_question[3];
      return (
        <View style={styles.columnContainer}>

          <View style={styles.question}>
            <Text style={styles.textquestion}>
              {'Choisir l\'image correspondant à ' + animalTest[this.state.currentQuestion].name_vn}
            </Text>
          </View>


          <View style={styles.rowContainer}>
            <AnswerBox
              id={0}
              active={this.state.answerId == 0}
              onAnswerSubmit={this.answerClicked}
              imageSource={image1}>
            </AnswerBox>

            <AnswerBox
              id={1}
              active={this.state.answerId == 1}
              onAnswerSubmit={this.answerClicked}
              imageSource={image2}>
            </AnswerBox>

          </View>

          <View style={styles.rowContainer}>
            <AnswerBox
              imageSource={image3}
              active={this.state.answerId == 2}
              id={2}
              onAnswerSubmit={this.answerClicked}>
            </AnswerBox>

            <AnswerBox
              id={3}
              active={this.state.answerId == 3}
              onAnswerSubmit={this.answerClicked}
              imageSource={image4}>
            </AnswerBox>

          </View>

          { this._renderNext() }
        </View>
      );
    }
  }

  var width = Dimensions.get('window').width; //full width
  var columnWidth = width / 2 - 40;
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
      alignItems: 'center',
      margin: 5
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
