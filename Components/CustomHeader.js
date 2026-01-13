import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CustomHeader = ({ title }) => {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);

    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>

                {/* <Pressable
                    onPress={() => navigation.goBack()}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    style={({ pressed }) => [
                        styles.backButton,
                        { backgroundColor: pressed ? '#7c66e5' : '#4123d0' },
                    ]}
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </Pressable> */}

                <Text style={styles.title}>Tambola <Text style={{ color: 'red' }}>G</Text><Text style={{ color: 'yellow' }}>a</Text><Text style={{ color: '#0000ff' }}>m</Text><Text style={{ color: 'green' }}>e</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00004d',
        paddingTop: 10,
        paddingBottom: 10,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 5,

    },
    title: {
        marginLeft: 16,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default CustomHeader;
