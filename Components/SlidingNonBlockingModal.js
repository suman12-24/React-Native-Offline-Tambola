// SlidingModal.js
import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const SlidingNonBlockingModal = ({ modalVisible, setModalVisible, calledNumbers }) => {
    const slideAnim = useRef(new Animated.Value(300)).current; // Start position off-screen (right)

    useEffect(() => {
        if (modalVisible) {
            // Slide the modal in from the right
            Animated.timing(slideAnim, {
                toValue: 0, // Target position (on-screen)
                duration: 300, // Animation duration
                useNativeDriver: true,
            }).start();
        } else {
            // Slide the modal out to the right
            Animated.timing(slideAnim, {
                toValue: 300, // Move off-screen
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible]);

    return (
        <Animated.View
            style={[
                styles.modalContent,
                { transform: [{ translateX: slideAnim }] }, // Slide animation
            ]}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>
                    <Text style={{ color: 'red' }}>
                        {calledNumbers[calledNumbers.length - 1]}
                    </Text>
                    {calledNumbers.length > 1 && '<--'}
                    {calledNumbers.slice(-calledNumbers.length, -1).reverse().join('<--')}


                    {'  '}
                </Text>
                <Text style={{ fontWeight: '600', color: 'blue' }}> {calledNumbers.length !== 0 && `Total: ${calledNumbers.length}`}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeText}>Close </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        position: 'absolute',
        top: 20, // Position at the top
        right: 0, // Position on the right
        width: "80%",
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        zIndex: 100, // Make sure it's above other content
        elevation: 5, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    modalText: {
        marginBottom: 10,
    },
    closeText: {
        color: 'red',
        fontWeight: '600'
    },
});

export default SlidingNonBlockingModal;
