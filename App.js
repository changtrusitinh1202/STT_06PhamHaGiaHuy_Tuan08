import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import API_Screen_01 from './Screen/API_Screen_01';
import API_Screen_02 from './Screen/API_Screen_02';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import API_Screen_03 from './Screen/API_Screen_03';


export default function App() { 
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="API_Screen_01"
                    component={API_Screen_01}
                    options={{
                        headerTransparent: true,
                        headerTitle: ''
                    }}
                >
                </Stack.Screen>

                <Stack.Screen
                    name="API_Screen_02"
                    component={API_Screen_02}
                    options={{
                        headerTitle: '',
                        headerTransparent: true        
                        
                    }}
                >
                </Stack.Screen>

                <Stack.Screen
                    name="API_Screen_03"
                    component={API_Screen_03}
                    options={{
                        headerShown: false
                        
                    }}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}


