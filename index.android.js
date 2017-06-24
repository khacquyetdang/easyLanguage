/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import StatusBarBackground from './app/components/StatusBarBackground'
import ViewContainer from './app/components/ViewContainer'


const people = [{firstName: "Dang", lastName: "Khac Quyet"},
                {firstName: "TRAN", lastName: "Thi Thu Hong"},
                {firstName: "Dang", lastName: "Leon"}
              ]

export default class testVectorIcon extends Component {

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
          dataSource={this.state.dataSource}
          renderRow={(person) => {return this._renderPersonRow(person)}}
      />
    </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <View style={styles.personRow}>
        <Text style={styles.personName}>
          {`${person.firstName} ${person.lastName}`}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={30} style={styles.personMoreIcon}/>
      </View>
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
    justifyContent: "flex-start"
  },

  personName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  personMoreIcon: {
    color: "green",
    height:30,
    width: 30
  }
});

AppRegistry.registerComponent('testVectorIcon', () => testVectorIcon);
