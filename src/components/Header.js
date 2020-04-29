import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export default function Header(){
  const navigation = useNavigation();

    return (
      <View>
          <View View style = {
              {
                  height: 45,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                   elevation: 4
              }
          } >
              <View View style = {
                  {
                      flexDirection: 'row',
                      marginVertical: 5,
                      marginHorizontal: 5
                  }
              } >
                  <Icon name="logo-youtube" color="red" size={32} />
                  <Text style={{fontSize:24,fontWeight:'bold',marginLeft:5}}>YouTube</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',width:150,marginVertical:5,marginHorizontal:5}}>
                  <Icon name="md-videocam"  size={32} />
                  <Icon name="md-search"  size={32} 
                    onPress={() => {
                            navigation.navigate("search");
                            }}
                  />
                  <Icon name="md-person"  size={32} />
              </View>
          </View>
      </View>
    )
  }

