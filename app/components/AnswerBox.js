'use strict'
import React, { Component } from 'react'
import  { StyleSheet, View,  Image, Dimensions, TouchableHighlight } from 'react-native'

class AnswerBox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.answerBoxContainer}>
        <TouchableHighlight>
          <Image
            style={styles.imageAnswerStyle}
            source={this.props.imageSource}
            />
        </TouchableHighlight>
      </View>
    )
  }
}

var width = Dimensions.get('window').width; //full width
var columnWidth = width / 2 - 30;
var rowHeight = width / 2 - 10;
var imageSize = width / 3;

const styles = StyleSheet.create({

  answerBoxContainer: {
    height: 20,
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column"
  },

  imageAnswerStyle: {
    margin: 2,
    width: imageSize,
    height: imageSize
  },


})

module.exports = AnswerBox
