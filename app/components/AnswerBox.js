'use strict'
import React, { Component } from 'react'
import  { StyleSheet, View,  Image, Dimensions, TouchableOpacity } from 'react-native'

class AnswerBox extends Component {
  constructor(props){
    super(props);
    this.state = { active: this.props.active };
  }

  static propTypes = {
    onAnswerSubmit: React.PropTypes.func
    };

  onPressBtn(){
    console.log("onPressBtn");
    this.setState( {
      active: !this.state.active
    });

    this.props.onAnswerSubmit(this.props.id);
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.01}
        onPress={() => {this.onPressBtn()}}
        style={ this.props.active ? styles.answerBoxContainerActive : styles.answerBoxContainer }>
        <Image
          style={styles.imageAnswerStyle}
          source={this.props.imageSource}
          />
      </TouchableOpacity>
    )
  }
}

var width = Dimensions.get('window').width; //full width
var columnWidth = width / 2 - 30;
var rowHeight = width / 2 - 10;
var imageSize = width / 2 - 40;

const styles = StyleSheet.create({

  answerBoxContainer: {
    flex:1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(56, 60, 64, 0.2)',
    borderWidth: 3,
    height: rowHeight,
    flexDirection: "column"
  },

  answerBoxContainerActive: {
    flex:1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 109, 205, 0.39)',
    borderWidth: 3,
    height: rowHeight,
    backgroundColor: 'rgba(0, 109, 205, 0.1)',
    flexDirection: "column"
  },

  buttonStyle: {
    padding :7,
  },

  imageAnswerStyle: {
    margin: 2,
    width: imageSize,
    height: imageSize
  },


})

module.exports = AnswerBox
