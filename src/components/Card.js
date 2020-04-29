import React, { Component } from 'react'
import {View, Text, Image,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Card extends Component {
    render() {
        return (
           <View style={{marginBottom:10,flex:1}}>
               <Image 
                source={{uri:'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
                style={{width:'100%',height:200}}
               />
               <View style={{flexDirection:'row',margin:5}}>
                   <Icon name="account-circle" size={40} />
                   <View style={{
                       marginHorizontal:10
                   }}>
                   <Text 
                   style={{
                       fontSize:20,
                       width:Dimensions.get('screen').width - 60
                   }}
                   ellipsizeMode="tail"
                   numberOfLines={2}
                   >
                       this is amazing clone this is amazing clone this is amazing clone
                       this is amazing clone this is amazing clone this is amazing clone
                   </Text>
                    <Text>
                       this is amazing clone 
                   </Text>
                   </View>
                   
               </View>
           </View>
        )
    }
}
