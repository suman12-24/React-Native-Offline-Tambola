import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AutoVerifyHomeScreen = ({ navigation, route }) => {
    const { gameKey } = route.params;
    return (
        <View style={{ flex: 1, backgroundColor: '#bdbdbd' }}>
            <View style={{
                height: 210, marginTop: 20, marginHorizontal: 10,
                justifyContent: 'space-evenly',
                borderRadius: 4, backgroundColor: '#fff', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 17, color: 'blue', fontWeight: '500' }}>Auto Verification of dividends</Text>
                <Text style={{ color: '#802b00', fontSize: 13, textAlign: 'center' }}>Auto Verification mean, you will get notification of any ticket that will get the claim for the selected dividends</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DividendsHomeScreen', { gameKey: gameKey })}
                    style={{ padding: 10, backgroundColor: 'black', borderRadius: 4 }}>
                    <Text style={{ color: '#e6b800', fontWeight: '600' }}>Select dividends for Auto Verify</Text>
                </TouchableOpacity>
            </View>


            {/* <View style={{
                height: 170, marginTop: 20, marginHorizontal: 10,
                justifyContent: 'space-evenly',
                borderRadius: 4, backgroundColor: '#fff', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 17, color: 'green', }}>For Auto Verification of more than 100 Tickets</Text>
                <TouchableOpacity style={{ padding: 10, backgroundColor: '#006622', borderRadius: 4 }}>
                    <Text style={{ color: '#fff', fontWeight: '600' }}>Click Here To Upgrade</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default AutoVerifyHomeScreen

const styles = StyleSheet.create({})