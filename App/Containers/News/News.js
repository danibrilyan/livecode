import React, {useState, useEffect} from 'react'
import { View, Text, FlatList,  } from 'react-native'
import NewsCard from '../../Component/NewsCard'
//import axios from 'axios';
import Participant from '../../Component/Participant';
import Api from '../../Services/Api'

export default function News() {
    const [dataNews, setdataNews] = useState([{
        _id:'01',
        title:'title1',
        content:'sdasdahsdbasdhbasdhbasdhbasdbasdasd'
    },
    {
        _id:'02',
        title:'title2',
        content:'sdasdahsdbasdhbasdhbasdhbasdbasdasd'
    }
    ])

    const [participants, setparticipants] = useState([])

    useEffect(() => {
        // Api.getParticipants().then(res=>{
        //     setparticipants(res.data)
        // })
        // axios.get('http://192.168.100.147:300/participants').then(res=>{
        //     setparticipants(res.data)
        // })
    }, [])


    return (
        <View>
            <Text>Ini News Screen</Text>
            <NewsCard dataNews={dataNews}/>

            <Text>Data Participant</Text>
            <Participant dataparticipant ={participants}/>
            {/* <FlatList
                data={dataNews}
                renderItem={({ item }) =>  <Item data={item} />}
                keyExtractor={item => item._id}
            /> */}
        </View>
    )
}
