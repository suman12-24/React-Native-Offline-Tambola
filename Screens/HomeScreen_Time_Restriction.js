import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const checkButtonVisibility = () => {

            const startDate = new Date('2024-10-24');
            const hideDate = new Date('2024-11-07');

            // Current date
            const currentDate = new Date();

            // If the current date is after the hideDate, hide the button
            if (currentDate >= hideDate) {
                setShowButton(false);
            }
        };

        checkButtonVisibility();

        // Optionally, check every minute (optional but not necessary in this case)
        const interval = setInterval(checkButtonVisibility, 60000); // Check every minute

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={{
            flex: 1, backgroundColor: '#fff',
            paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center'
        }}>
            {showButton && (
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateGame')}
                    style={{
                        height: 200, width: 200, borderWidth: 2,
                        borderColor: 'black', backgroundColor: '#ff8080', alignItems: 'center', justifyContent: 'center'
                    }}>
                    <Text><Ionicons name="person-sharp" size={24} color="black" /></Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Host Game</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
