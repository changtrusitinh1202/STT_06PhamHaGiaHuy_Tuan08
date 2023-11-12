import React, { useState } from "react";
import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 

function addPost(job){
    fetch('https://653f25b39e8bd3be29e0007b.mockapi.io/huy',{
        method: 'POST',
        body: JSON.stringify({
            name: job
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
        .then(response => response.json())
        .then(json => console.log(json));
}
export default function API_Screen_03({navigation}){
    var [text, setText] = useState('')
    var [data, setData] = useState([]);
   
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                    <ImageBackground
                        source={require('../assets/3607444.png')}
                        style={styles.img}
                    ></ImageBackground>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: '18px', fontWeight: '700'}}>Hi Twinkle</Text>
                        <Text style={{fontSize: '14px', fontWeight: '600',marginLeft: '5px'}}>Have agrate day a head</Text>
                    </View>
                    <AntDesign name="arrowleft" size={24} color="black" style={{position: 'relative', left: '80px'}} 
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{name: 'API_Screen_02'}]
                    })} />
            </View>
            <View style={styles.top}>
                <Text style={{fontSize: '28px', fontWeight: '700'}}>ADD YOUR JOB</Text>
            </View>
            <View style={styles.center}>
                <TouchableOpacity style={styles.opa}>
                    <Feather name="file-text" size={25} color="green" style={{marginTop: '8px', marginLeft: '5px', marginRight: '5px'}} />
                    <TextInput placeholder="input your job" style={{width: '300px'}} onChangeText={newText => setText(newText)}></TextInput>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={{width: '190px', height: '40px', justifyContent: 'center', 
                                            alignItems: 'center', backgroundColor: '#00BDD6',borderRadius: '12px', flexDirection: 'row'}}
                                            onPress={() => addPost(text)}>
                        <Text style={{marginBottom: '3px', color: 'white', marginRight: '4px'}}>FINISH</Text>   
                        <AntDesign name="arrowright" size={15} color="white" />            
                </TouchableOpacity>
                <ImageBackground
                    source={require('../assets/Image95.png')}
                    style={styles.img2}
                    resizeMode="cover"
                />
            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '40px',
        marginLeft: '30px'
    },

    img: {
        width: '45px',
        height: '45px'
    },

    opa:{
        width: '334px',
        height: '44px',
        borderWidth: 1,
        borderRadius: '5px',
        flexDirection: 'row'
    },

    center:{
        alignItems: 'center'
    },

    top: {
        alignItems: 'center',
        marginBottom: '40px',
        marginTop: '40px'
    },

    bottom:{
        alignItems: 'center',
        marginTop: '50px'
    },

    img2: {
        width: '200px',
        height: '200px', 
        marginTop: '100px'
    },

})