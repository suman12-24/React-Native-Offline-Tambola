import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButtonGroup = ({ options, selectedValue, onValueChange }) => {
    return (
        <View style={styles.radioButtonContainer}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.radioButton}
                    onPress={() => onValueChange(option)}
                >
                    <View style={styles.outerCircle}>
                        {selectedValue === option && <View style={styles.innerCircle} />}
                    </View>
                    <Text style={styles.label}>{option.charAt(0).toUpperCase() + option.slice(1)}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009999',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#009999',
    },
    label: {
        fontSize: 16,
    },
});

export default RadioButtonGroup;
