import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default function Participant(props) {
    function Item({ data }) {
        return (
            <View style={{borderColor:'black', borderWidth:1, borderStyle:'solid', margin:10, padding:5}}>
                <Text style={{backgroundColor:'blue', color:'white', padding:3}} >{data.full_name}</Text>
                <View>
                    <Text>{data.address}</Text>
                </View>
            </View>
            
        );
    }
    return (
        <FlatList
            data={props.dataparticipant}
            renderItem={({ item }) =>  <Item data={item} />}
            keyExtractor={item => item._id}
        />
    )
}
