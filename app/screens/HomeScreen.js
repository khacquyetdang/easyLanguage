/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableOpacity
} from 'react-native';

import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'


const people = [{firstName: "Dang", lastName: "Khac Quyet"},
                {firstName: "TRAN", lastName: "Thi Thu Hong"},
                {firstName: "Dang", lastName: "Leon"}
              ]

export default class HomeScreen extends Component {

  static navigationOptions = {
      title: 'List people',
    };
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(people),
      };
    }

  render() {
    return (
    <ViewContainer>
        <ListView
          style={{marginTop:100}}
          dataSource={this.state.dataSource}
          renderRow={(person) => {return this._renderPersonRow(person)}}
      />
    </ViewContainer>
    );
  }

  _renderPersonRow(person) {

    const { navigate } = this.props.navigation;
    console.log(person)
    return (
      <TouchableOpacity  style={styles.personRow} onPress={() => navigate('TestVocabulary', {person : person})}>
        <Text style={styles.personName}>
          {`${person.firstName} ${person.lastName}`}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={15} style={styles.personMoreIcon}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  personRow: {
    flexDirection: "row",
    margin:10,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  personName: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },

  personMoreIcon: {
    color: "green",
    height:30,
    width: 30
  }
});

module.exports = HomeScreen;
