import React, { Component, useState } from 'react'
import {View, Text,ScrollView,TextInput,FlatList,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MiniCard from '../components/MiniCard'

//   'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]'\
// AIzaSyAfVoVXG2g - Rk6BZweiWF - ei6B - X4jfkXI

const Search = ({navigation}) => {
    
        const [value, setValue] = useState("")
        const [miniCardData, setMiniCard] = useState([])
        const [loading, setLoading] = useState(false)
        const fetchData= () => {
            setLoading(true)
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAfVoVXG2g-Rk6BZweiWF-ei6B-X4jfkXI`)
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                setMiniCard(data.items)
            })
        }

        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',
                padding:5,
                justifyContent:'space-around',
                elevation:5,
                backgroundColor:'white' }}>
                    <Icon name="md-arrow-back" size={32} 
                        onPress={() => navigation.goBack()}
                    />
                    <TextInput 
                        style={{
                            width:'70%',
                            backgroundColor:'#e6e6e6'
                        }}
                        onChangeText={(text)=>setValue(text)}
                    />
                    <Icon name="md-send" size={32} 
                        onPress={()=>fetchData()}
                    />
                </View>
              {loading ?  <ActivityIndicator style={{marginTop:10}} size='large' color='red' /> : null }
               <FlatList 
                data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard 
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
               />

            </View>
        )
    }


export default Search