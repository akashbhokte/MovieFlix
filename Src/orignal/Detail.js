
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-paper';
import { Card } from 'react-native-shadow-cards';
// import AntDesign from 'react-native-vector-icons';
import MaterialCommunitylcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { black } from 'react-native-paper/lib/typescript/styles/colors';
import moment from 'moment';
import axios from 'axios';

const Show = ({ navigation, route }) => {
    const item = route.params.item
    const items = item.items

    // console.log("items.....", item)
    const [Movie, setMovie] = useState('');
    // useEffect(() => {
    //     console.log('reload...................');
    //     getNP();
    // }, []);

    // async function getNP() {
    //     // console.log('Hello');
    //     var resdata = await axios.get(
    //         'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',

    //     );
    //     console.log('resdata is ', resdata.data.results[0]);
    //     setMovie(resdata.data.results[1]);
    // }
    let showDate = moment(item.release_date).format('MMM DD, YYYY')
    return (
        <View style={styles.Main_Body}>
            {/* body Section  */}
            {/* <View style={{ flex: 1 }}> */}
            {/* <ScrollView style={{ flex: 1, backgroundColor: 'red' }}> */}
            <View style={{ flex: 1, }}>
                <Image source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
                }}
                    style={styles.Image_Style}
                />
            </View>
            <View style={{ flex: 1, marginVertical: '-70%', padding: 15, backgroundColor: 'rgba(1,1,1,0.5)', }}>
                <ScrollView>
                    <Text style={styles.Title_Text}>
                        {item.title}
                    </Text>
                    <Divider style={{ borderWidth: 0.3, borderColor: 'white' }} />
                    <Text style={{ color: 'ghostwhite' }}> {showDate}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'ghostwhite' }}> <FontAwesome5 name="crown" color={'ghostwhite'} size={15} />  {item.vote_average}% </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: 'ghostwhite' }}> <Ionicons name="alarm-outline" color={'ghostwhite'} size={15} />  {item.vote_average}% </Text>

                        </View>
                    </View>
                    <Text style={{ color: 'white', fontFamily: 'monospace', fontSize: 15 }}>
                        {item.overview}
                    </Text>
                </ScrollView>
            </View >
        </View >
    )
}

export default Show

const styles = StyleSheet.create({
    Main_Body: {
        flex: 1,
        // backgroundColor: 'lightgray'
        backgroundColor: 'orange'
    },
    Title_Text: {
        padding: 10,
        color: 'ghostwhite',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'monospace'
    },

    Image_Style: {
        width: '100%',
        height: '100%'
    }

})