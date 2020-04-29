import React, { Component } from 'react'
import {View, Text,ScrollView} from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Home (navigation){
    return (
      <View>
          <Header />
          <ScrollView>
              <Card />
              <Card />
              <Card />
              <Card />

          </ScrollView>
      </View>
    )
  }
