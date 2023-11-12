import React from "react";
import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

export default function API_Screen_01({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                    <ImageBackground
                        source={require('../assets/Image95.png')}
                        style={styles.img}
                        resizeMode="cover"
                    >

                </ImageBackground>
                <Text style={styles.text}>MANAGER YOUR</Text>
                <Text style={styles.text}>TASK</Text>
            </View>
            <View style={styles.center}>
                <View>
                    <AntDesign name="mail" size={24} color="black" style={{position: 'absolute', top: '8px', left: '8px'}} />
                    <TextInput placeholder="Enter your name" placeholderTextColor={'#9095A0'} style={styles.txtInput}></TextInput>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={{width: '190px', height: '40px', justifyContent: 'center', 
                                        alignItems: 'center', backgroundColor: '#00BDD6',borderRadius: '12px', flexDirection: 'row'}}
                                        onPress={() => navigation.navigate('API_Screen_02')}>
                    <Text style={{marginBottom: '3px', color: 'white', marginRight: '4px'}}>GET STARTED</Text>   
                    <AntDesign name="arrowright" size={15} color="white" />            
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

    img: {
        width: '271px',
        height: '271px',
        marginTop: '45px',
        marginBottom: '30px'
    },

    top:{
        alignItems: 'center'
    },

    text:{
        color: '#8353E2',
        fontSize: '24px',
        fontWeight: '700'
    },

    txtInput:{
        height: '43px',
        width: '334px',
        borderWidth: 1,
        borderColor: '#9095A0',
        borderRadius: '12px',
        paddingLeft: '42px'
    },

    center:{
        alignItems: 'center',
        marginTop: '40px'
    },

    bottom:{
        alignItems: 'center',
        marginTop: '100px'
    }


})