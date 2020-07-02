import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default function NewsCard(props) {

    function Item({ data }) {
        return (
            <View style={{borderColor:'black', borderWidth:1, borderStyle:'solid', margin:10, padding:5}}>
                <Text style={{backgroundColor:'blue', color:'white', padding:3}} >{data.title}</Text>
                <View>
                    <Text>{data.content}</Text>
                </View>
            </View>
            
        );
    }
    return (
        <FlatList
            data={props.dataNews}
            renderItem={({ item }) =>  <Item data={item} />}
            keyExtractor={item => item._id}
        />
    )
}
