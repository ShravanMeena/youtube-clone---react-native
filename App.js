import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Home from './src/screens/Home'
import Search from './src/screens/Search'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Home />
          {/* <Search /> */}
      </View>
    )
  }
}
