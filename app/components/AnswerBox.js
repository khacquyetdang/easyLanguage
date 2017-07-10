'use strict'
import React, { Component } from 'react'
import  { StyleSheet, View  } from 'react-native'

class AnswerBox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.answerBoxContainer}>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  answerBoxContainer: {
    height: 20,
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column"
  }

})

module.exports = AnswerBox
