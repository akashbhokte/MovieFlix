import * as React from 'react';
import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Appearance } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-shadow-cards';
import Detail from '../orignal/Detail';

const RatedScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson.results);
                setMasterDataSource(responseJson.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', { item: item })}
                >

                    <View style={styles.Card_Container}>

                        <View style={styles.Container_Item_Image}>
                            < Image
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
                                }}
                                style={styles.Image_Style} />
                        </View>
                        < View style={styles.Container_Item_Desc} >
                            <Text style={styles.Text_Style_Title}> {item.title} </Text>
                            < Text style={styles.Text_Style_P} > {item.overview} </Text>

                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.Main_Body}>
            <View style={styles.SearchBar_Style}>

                <Searchbar
                    placeholder="Search"
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}

                />
            </View>

            <View style={styles.Body_View}>
                <Card style={styles.Main_Card_Style}>

                    <View >

                        {/* <FlatList
                            data={NowPlaying}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        /> */}
                        <FlatList
                            data={filteredDataSource}
                            keyExtractor={(item, index) => index.toString()}
                            // ItemSeparatorComponent={ItemSeparatorView}
                            renderItem={ItemView}
                        />

                    </View>

                </Card>
            </View>
        </View >
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
        flex: 1,
        backgroundColor: 'orange'
    },
    Main_Card_Style: {
        width: '95%',
        height: '97%',
        margin: 10,
        // padding: 10,
        backgroundColor: 'orange'
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