import React, {useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import NewsCard from '../../Component/NewsCard'
import Participant from '../../Component/Participant';
import Api from '../../Services/Api'

export default function Home({ navigation }) {
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
        Api.getParticipants().then(res=>{
            setparticipants(res.data)
        })
    }, [])
    return (
        <View>
            <Text>Ini Home</Text>
            <Button onPress={()=>navigation.navigate('News')} title="News" />
            <Button onPress={()=>navigation.navigate('Account')} title="Account" />
            <NewsCard dataNews={dataNews}/>
            <Participant dataparticipant ={participants}/>
        </View>
    )
}
