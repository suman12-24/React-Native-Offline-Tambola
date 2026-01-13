import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, backgroundColor: '#fff',
            paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center'
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateGame')}
                style={{
                    height: 200, width: 200, borderWidth: 2,
                    borderColor: 'black', backgroundColor: '#ff8080', alignItems: 'center', justifyContent: 'center'
                }}>
                <Text><Ionicons name="person-sharp" size={24} color="black" /></Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Host Game</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})