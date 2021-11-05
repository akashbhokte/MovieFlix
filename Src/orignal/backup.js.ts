import * as React from 'react';
import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-shadow-cards';
import Detail from '../orignal/Detail';

const RatedScreen = ({ navigation }) => {
    const [NowPlaying, setNowPlaying] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [Search, setSearch] = useState([]);

    // const onChangeSearch = query => setSearchQuery(query);

    const fun = (text) => {
        // output = NowPlaying.filter((item) => {
        //     return item.original_title == 'The Godfather';
        // }).map(function ({ id, title }) {
        //     return { id, title };
        // });
        // console.log("output", output);
        // // setSearch(output)


        var data = NowPlaying.filter((item) => item.original_title == text).map(({ id, title }) => ({ id, title }));
        console.log(data);
        setSearchQuery

    }
    fun();


    // var output = NowPlaying.filter(function (item) {
    //     return item.original_title == 'The Godfather';
    // }).map(function ({ id, title }) {
    //     return { id, title };
    // });
    // console.log("output", output);
    // setSearch(output)



    useEffect(() => {
        console.log('reload...................');
        getNP();
    }, []);
    async function getNP() {
        // console.log('Hello');
        var resdata = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',

        );
        // console.log('resdata is ', resdata.data.results);
        setNowPlaying(resdata.data.results);
    }

    const renderItem = ({ item }) => (

        <View>
        <TouchableOpacity
                onPress= {() => navigation.navigate('Detail', { item: item })} >

    <View style={ styles.Card_Container }>

        <View style={ styles.Container_Item_Image }>
            {/* <Text style={styles.Text_Style}>Hello</Text> */ }

            < Image
source = {{
    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
                            }}
style = { styles.Image_Style } />
    </View>
    < View style = { styles.Container_Item_Desc } >
        <Text style={ styles.Text_Style_Title }> { item.original_title } < /Text>
            < Text style = { styles.Text_Style_P } > { item.overview } < /Text>

                < /View>
                < /View>
                < /TouchableOpacity>
                < /View>

    );

return (
    <View style= { styles.Main_Body } >
    <View style={ styles.SearchBar_Style }>
        <Searchbar
                    placeholder="Search"
onChangeText = {(text) => { fun(text) }}
// value={searchQuery}

/>
    < /View>

    < View style = { styles.Body_View } >
        <Card style={ styles.Main_Card_Style }>

            <View>

            <FlatList
                            data={ NowPlaying }
renderItem = { renderItem }
keyExtractor = { item => item.id }
    />

    </View>

    < /Card>
    < /View>
    < /View >
    )
}

export default RatedScreen

const styles = StyleSheet.create({
    Main_Body: {
        flex: 1,
        backgroundColor: 'orange'

    },
    SearchBar_Style: {
        margin: 10,
        marginBottom: 0
    },
    Body_View: {
        flex: 1
    },
    Main_Card_Style: {
        width: '95%',
        height: '97%',
        margin: 10,
        // padding: 10,
    },
    Card_Container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        // marginTop: 10,
        borderBottomWidth: 0.3,
        backgroundColor: 'orange'
    },
    Container_Item_Image: {
        // paddingRight: '5%',
        // paddingTop: '5%',
        // marginLeft:10
        // borderRightWidth: 0.5
        flex: 0.7,
        justifyContent: 'center'
    },
    Container_Item_Desc: {
        padding: 10,
        flex: 1
        // marginLeft:10
        // borderRightWidth: 0.5
    },
    Text_Style_Title: {
        borderBottomWidth: 0.3,
        fontSize: 20,
        justifyContent: 'center',
        color: 'black',
        fontFamily: 'monospace'
    },
    Text_Style_P: {
        padding: 3,
        // paddingRight: 70,
        fontSize: 10,
        color: 'black',
        fontFamily: 'monospace'
    },
    Image_Style: {
        width: '100%',
        height: '100%',
    }
})






// https://image.tmdb.org/t/p/w500/