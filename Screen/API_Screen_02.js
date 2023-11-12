import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 


export default function API_Screen_02({navigation}){
    var [count, setCount] = useState(0);
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://653f25b39e8bd3be29e0007b.mockapi.io/huy')
            .then(response => response.json())
            .then(json => {
                setData(json);           
            });
    }, [data]);

    function deletePost(id){
        fetch(`https://653f25b39e8bd3be29e0007b.mockapi.io/huy/${id}`, {
            method: 'DELETE',
          });
          navigation.reset({
            index: 0,
            routes: [{name: 'API_Screen_02'}]
        })
    }
  
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={require('../assets/3607444.png')}
                    style={styles.img}
                    onPress={() => console.log(count)}></ImageBackground>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: '18px', fontWeight: '700'}}>Hi Twinkle</Text>
                    <Text style={{fontSize: '14px', fontWeight: '600',marginLeft: '5px'}}>Have agrate day a head</Text>
                </View>
            </View>

            <View style={styles.top}>
                <AntDesign name="search1" size={24} color="black" style={{position: 'absolute', left: '35px', top: '7px'}} />
                <TextInput placeholder="Search" style={styles.input}></TextInput>
            </View>

            <View style={styles.center}>
                {
                    data.map((item) => {
                        return(
                            <View style={styles.list} >              
                            <View style={{flexDirection: 'row', marginLeft: '15px'}}>
                                <AntDesign name="checksquareo" size={20} color="green" />
                                <AntDesign name="delete" size={24} color="black" style={{position: 'relative', left: '230px'}} 
                                        onPress={() => deletePost(item.id)} />
                                <Text style={{marginTop: '0px', marginLeft: '10px', fontWeight: '600'}} >{item.name}</Text>
                            </View>         
                            <SimpleLineIcons name="note" size={20} color="red" style={{marginRight: '10px'}} />  
                              
                        </View>
                        )
                    })
                }
               
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('API_Screen_03')}>
                    <Text style={{color: 'white', fontSize: '40px',marginBottom: '10px'}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    top: {
        width: '90%'
    },

    header: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '40px',
        marginRight: '30px'
    },

    img: {
        width: '45px',
        height: '45px'
    },

    top: {
        alignItems: 'center',
        marginTop: '20px'
    },

    input:{
        borderWidth: 1,
        height: '43px',
        width: '334px',
        borderRadius: '5px',
        paddingLeft: '40px',
        paddingBottom: '5px'
    },

    touch:{
        height: '60px',
        width: '60px',
        backgroundColor: '#00BDD6',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottom: {
        alignItems: 'center',
        marginTop: '20px'
    },

    center:{
        alignItems: 'center',
        marginTop: '50px'
    },

    list:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        height: '50px',
        width: '85%',
        borderRadius: '10px',
        justifyContent: 'space-between',
        marginBottom: '20px'
    }
})